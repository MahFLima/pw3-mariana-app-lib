import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import PageBook from "../pages/PageBook";
import ListBooks from "../pages/ListBooks";
import NavBar from "../components/NavBar";
import Cadastrar from "../pages/Cadastrar";
import DeleteBook from "../pages/DeleteBook";
import UpdateBook from "../pages/UpdateBooks";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listBooks" element={<ListBooks />} />
        <Route path="/book/:id" element={<PageBook />} />
        <Route path="/createBooks" element={<Cadastrar/>} />
        <Route path="/updateBook/:id" element={<UpdateBook/>} />
        <Route path="/deleteBook/:id" element={<DeleteBook/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
