import { React, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/excluirLivro/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate("/listBooks", { state: "LIVRO EXCLUÍDO COM SUCESSO!" });
      })
      .catch((err) => console.log(err));
  });

  return <div>{/* <h1>TESTE DE EXCLUSÃO DE LIVRO!!!!</h1> */}</div>;
}

export default DeleteBook;
