import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <>
      <nav className="flex justify-between bg-blue-800 p-4 text-gray-100 ">
        <ul className="hidden tablet:flex items-center justify-between">
          <li className="mr-4">
            <button>
              <img src="./book.png" className="w-8 object-contain" />
            </button>
          </li>

          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/createBooks">Cadastrar Livro</Link>
          </li>
          <li className="mr-4">
            <Link to="/listBooks">Listar Livro</Link>
          </li>
        </ul>
        <ul className="flex tablet:hidden items-center justify-between">
          <li className="mr-4">
            <button onClick={() => {activeMenu ? setActiveMenu(false) : setActiveMenu(true)}}>
              <img src="./book.png" className="w-8 object-contain" />
            </button>
          </li>
        </ul>
      </nav>
      {activeMenu && (
        <ul className="fixed top-16 left-0 h-screen bg-blue-800 flex tablet:hidden flex-col">
          <li className="p-4 text-white text-lg hover:opacity-70"><Link to="/">Home</Link></li>
          <li className="p-4 text-white text-lg hover:opacity-70">
            <Link to="/createBooks">Cadastrar Livro</Link>
          </li>
          <li className="p-4 text-white text-lg hover:opacity-70"><Link to="/listBooks">Listar Livro</Link></li>
        </ul>
      )}
    </>
  );
}

export default NavBar;
