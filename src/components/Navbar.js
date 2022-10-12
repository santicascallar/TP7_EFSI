import React from "react";
import Logo from "../imgs/Logo.png"

const Navbar = () => {
    return(
        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="index.html">
                <img src={Logo} width="100" height="110" alt="sanitarios campana"/>
            </a>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="s">INICIO<span class="sr-only">(current)</span></a>
              </li>
            <li class="nav-item active">
                <a class="nav-link" href="ss">QUIENES SOMOS<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="aa">PRODUCTOS<span class="sr-only">(current)</span></a>
              </li>
            <li class="nav-item active">
                <a class="nav-link" href="a">CONTACTO<span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;