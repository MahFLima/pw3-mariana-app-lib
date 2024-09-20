import React from 'react';
import Input from '../components/forms/Input';
import Select from '../components/forms/Select';
import Button from '../components/forms/Button';

function Cadastrar() {

  return (
    <main className='flex flex-col items-center mt-8'>
      <strong className='text-blue-950 text-lg'>
        CADASTRO DE LIVROS
      </strong>
      <Input 
        type="text" 
        text="Título do livro:" 
        name="txt_livro" 
        placeHolder="Digite aqui o nome do seu livro"
      /> 
      <Input 
        type="text" 
        text="Nome do autor:" 
        name="txt_autor" 
        placeHolder="Digite aqui o nome do autor"
      /> 
      <Input 
        type="text" 
        text="Descrição do livro:" 
        name="txt_descricao" 
        placeHolder="Digite aqui a descrição do livro"
      /> 
      <Select
        name="categoria"
        text="Escolha uma categoria de livro"
      />
      <Button rotulo="Cadastrar"/>
    </main>
    
  );
}

export default Cadastrar;