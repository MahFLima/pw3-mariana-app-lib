import React, { useState, useEffect } from "react";
import Input from "../components/forms/Input";
import Select from "../components/forms/Select";
import Button from "../components/forms/Button";
import { useNavigate } from "react-router-dom";

function Cadastrar() {
  const navigate = useNavigate()
  const [listagemCategorias, setListagemCategorias] = useState([]);
  const [book, setBook] = useState({});

  function handlerChangeBook(event) {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book)
  }

  /* CAPTURA OS DADOS DA SELECT */
  function handleChangeCategory(event) {
    setBook({ ...book, cod_categoria: event.target.value });
    console.log(book)
  }

  useEffect(() => {
    fetch("http://localhost:5000/listagemCateorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setListagemCategorias(data.data);
      })
      .catch((err) => {
        console.log(error);
      });
  }, []);

  function createBook(book) {
    // console.log(JSON.stringify(book))

    fetch("http://localhost:5000/inserirLivro", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify(book),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate("/listBooks");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function submit(event) {
    event.preventDefault();
    createBook(book);
  }

  return (
    <form onSubmit={submit} className="flex flex-col items-center mt-8">
      <strong className="text-blue-950 text-lg">CADASTRO DE LIVROS</strong>
      <Input
        type="text"
        text="Título do livro:"
        name="nome_livro"
        placeHolder="Digite aqui o nome do seu livro"
        handlerChangeBook={handlerChangeBook}
      />
      <Input
        type="text"
        text="Nome do autor:"
        name="autor_livro"
        placeHolder="Digite aqui o nome do autor"
        handlerChangeBook={handlerChangeBook}
      />
      <Input
        type="text"
        text="Descrição do livro:"
        name="descricao_livro"
        placeHolder="Digite aqui a descrição do livro"
        handlerChangeBook={handlerChangeBook}
      />
      <Select
        name="categoria"
        text="Escolha uma categoria de livro"
        options={listagemCategorias}
        handleChangeCategory={handleChangeCategory}
      />
      <Button type="submit" rotulo="Cadastrar"/>
    </form>
  );
}

export default Cadastrar;
