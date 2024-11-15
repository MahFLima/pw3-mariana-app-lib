import React, { useEffect, useState } from "react";
import CardBooks from "../components/CardBook";
import imagem from "../assets/livros/cavernas_aco.jpg";

function ListBooks() {
  const [listagemBooks, setListagemBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/listagemLivros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setListagemBooks(data.data);
      })
      .catch((err) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="flex flex-col items-center gap-8 pt-8">
      <div className="flex gap-4 flex-wrap justify-center">
        {listagemBooks.map((item, index) => {
          return (
            <CardBooks
              key={index}
              titulo={item.nome_livro}
              autor={item.autor_livro}
              imagem={imagem}
              cod_livro={item.cod_livro}
            />
          );
        })}
      </div>
    </main>
  );
}

export default ListBooks;
