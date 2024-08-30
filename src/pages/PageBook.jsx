import React from 'react';
import { Link } from 'react-router-dom';

function PageBook() {
  return (
    <main className='flex flex-col items-center mt-10'>
      <strong className='text-base'>Pagina do Livro</strong>
      <Link to="/list-books">Voltar</Link>
    </main>
    
  );
}

export default PageBook;