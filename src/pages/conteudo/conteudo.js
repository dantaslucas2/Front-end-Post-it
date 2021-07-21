import React, { useState } from "react";
import Home from "../home/home";
import Formulario from "../formulario/formulario";
import Contatos from "../contact/contatos";
import Portifolio from "../portifolio/portifolio";
import Navbar from "../../componentes/navbar/";

function Conteudo() {
  function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [curtop];
    }
  }

  function HandleClickPage(page) {
    console.log(document.getElementById(page));
    console.log("########");
    window.scroll(0, findPos(document.getElementById(page)));
  }
  return (
    <>
      <Navbar handleClick={HandleClickPage} />
      <Home id="home" />
      <Portifolio id="portifolio" />
      <Formulario id="formulario" />
      <Contatos id="contato" />
    </>
  );
}

export default Conteudo;
