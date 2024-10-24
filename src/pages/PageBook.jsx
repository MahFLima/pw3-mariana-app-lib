import React, { useState } from "react";
import Button from "../components/forms/Button";
import imagem from "../assets/livros/cavernas_aco.jpg";

function PageBook() {
  const[book, setBook] = useState({});

  return (
    <main className="flex justify-center w-screen">
      <div className="flex justify-center flex-wrap gap-10 max-w-5xl w-full mt-8">
        <div className="max-w-52 w-full">
          <img
            className="w-full"
            src={imagem}
            alt="Capa do livro: As cavernas de aço"
          />
        </div>

        <div className="flex flex-col">
          <span>Livro</span>
          <span>Autor</span>

          <span>Descrição</span>

          <div>
            <Button type="button" rotulo="EDITAR" />

            <Button type="button" rotulo="EXCLUIR" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageBook;
