import React from "react";
import CardBooks from "../components/CardBook";
import imagem from "../assets/livros/cavernas_aco.jpg";
import data from "../utils/dados"

function ListBooks() {

  return (
    <main className="flex flex-col items-center gap-8 pt-8">
      <div className="flex gap-4 flex-wrap justify-center">
        <CardBooks
          titulo={data[0].titulo}
          autor={data[0].autor}
          imagem={imagem}
        />
        <CardBooks
          titulo={data[1].titulo}
          autor={data[1].autor}
          imagem={imagem}
        />
        <CardBooks
          titulo={data[2].titulo}
          autor={data[2].autor}
          imagem={imagem}
        />
      </div>
    </main>
  );
}

export default ListBooks;
