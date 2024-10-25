import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/forms/Button";
import imagem from "../assets/livros/cavernas_aco.jpg";

function PageBook() {
  const [book, setBook] = useState({});

  /* RECUPERANDO O ID DA URL */
  const { id } = useParams();

  useEffect(()=>{

    fetch(`http://localhost:5000/listagemLivro/${id}`, {
        method: 'GET',
        mode:'cors',
        headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*',
    },
    })
        .then((resp)=>resp.json())
        .then((data)=>{
        setBook(data.data);
        console.log(data.data);
    })
    .catch((err)=>{console.log(err)});

    },[]);

  return (
    <main className="flex justify-center w-screen">
      <div className="flex justify-center items-center flex-wrap gap-10 max-w-5xl w-full mt-8">
        <div className="max-w-72 w-full">
          <img
            className="w-full"
            src={imagem}
            alt="Capa do livro: As cavernas de aço"
          />
        </div>

        <div className="flex flex-col p-4 max-w-xl">
          <span className="text-3xl font-semibold">{book.nome_livro}</span>
          <span className="text-base mb-4">{book.autor_livro}</span>

          <span className="text-base mb-4">{book.descricao_livro}</span>

          <div className="flex justify-between">
            <Button type="button" rotulo="EDITAR" />

            <Button type="button" rotulo="EXCLUIR" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageBook;
