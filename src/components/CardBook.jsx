import React from 'react';
import { Link } from 'react-router-dom';

function CardBooks({titulo, autor, imagem}) {
  return (
    <Link to={"/book"} className='p-4 w-52 flex flex-col border rounded-lg bg-gray-100'>
      <img className="w-full object-contain" src={imagem} alt="imagem do livro"/>
      <strong className='text-base'>{titulo}</strong>
      <p>{autor}</p>
    </Link>
  );
}

export default CardBooks;