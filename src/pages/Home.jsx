import React from 'react';

function Home() {
  return (
    <main className='flex flex-col items-center justify-center p-4'>
      <strong className='text-2xl mb-1'>Bem Vindo ao&nbsp; 
        <span className='text-blue-500'>
          LIBRI
        </span>
      </strong>
      <p className='mb-4 text-gray-600 font-light'>Sua plataforma web de gestão de livros!</p>
      <img src="./book_home.jpg" alt="" className='w-full max-w-2xl'/>
    </main>
    
  );
}

export default Home;