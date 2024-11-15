import React, { useState, useEffect } from "react";
import Input from "../components/forms/Input";
import Select from "../components/forms/Select";
import Button from "../components/forms/Button";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBook() {
  const navigate = useNavigate();
  const [listagemCategorias, setListagemCategorias] = useState([]);
  const [book, setBook] = useState({});
  const { id } = useParams();

  function handlerChangeBook(event) {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book);
  }

  /* CAPTURA OS DADOS DA SELECT */
  function handleChangeCategory(event) {
    setBook({ ...book, cod_categoria: event.target.value });
    console.log(book);
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

  /* RECUPERA OS DADOS DO LIVRO DO BACKEND */
  useEffect(() => {
    fetch(`http://localhost:5000/listagemLivro/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("LIVROS: " + data.data.cod_livro);
        setBook(data.data);
        console.log("STATE: " + data.data.nome_livro);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* ALTERAÇÃO DOS DADOS DE LIVRO */
  function updateBook(book) {
    console.log(JSON.stringify(book));

    fetch("http://localhost:5000/alterarLivro", {
      method: "PUT",
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
        console.log(data);
        navigate("/listBooks", { state: "LIVRO ALTEARADO COM SUCESSO!" });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* FUNÇÃO DE SUBMIT */
  function submit(event) {
    event.preventDefault();
    updateBook(book);
  }

  return (
    <form onSubmit={submit} className="flex flex-col items-center mt-8">
      <strong className="text-blue-950 text-lg">ATUALIZAR LIVRO</strong>
      <Input
        type="text"
        name="nome_livro"
        id="nome_livro"
        placeholder="Digite o título do livro"
        text="Digite o título do livro"
        handlerChangeBook={handlerChangeBook}
        value={book.nome_livro}
      />

      <Input
        type="text"
        name="autor_livro"
        id="autor_livro"
        placeholder="Digite o nome do autor"
        text="Digite o nome do autor"
        handlerChangeBook={handlerChangeBook}
        value={book.autor_livro}
      />

      <Input
        type="text"
        name="descricao_livro"
        id="descricao_livro"
        placeholder="Digite uma descrição para  livro"
        text="Descrição"
        handlerChangeBook={handlerChangeBook}
        value={book.descricao_livro}
      />

      <Select
        name="categoria_id"
        text="Selecione a categoria do livro"
        options={listagemCategorias}
        handleChangeCategory={handleChangeCategory}
      />

      <Button rotulo="Editar livro" />
    </form>
  );
}

export default UpdateBook;
