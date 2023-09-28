import React from "react";
import "./header.css";


export default function Header(){
    return(
      <header id="header" class="fixed-top back">
      <div class="container d-flex align-items-center justify-content-lg-between">
  
        <h1 class="logo me-auto me-lg-0"><a href="index.html">Barber<span>.</span></a></h1>
    
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">Sobre</a></li>
            <li><a class="nav-link scrollto" href="#services">Serviços</a></li>
            <li><a class="nav-link scrollto " href="#portfolio">Instagram</a></li>
            <li><a class="nav-link scrollto" href="#team">Time</a></li>
            <li class="dropdown"><a href="#"><span>Já é cliente?</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Ainda não, mas quero fazer um orçamento</a></li>
                <li class="dropdown"><a href="#"><span>Já sou cliente</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Acompanhar um atendimento</a></li>
                    <li><a href="#">Solicitar um chamado</a></li>
                    <li><a href="#">Solicitar Garantia</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="#contact">Contato</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="#about" class="get-started-btn scrollto margin30">Entrar em Contato</a>
      </div>
    </header>
    )
}