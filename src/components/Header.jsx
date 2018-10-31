import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="/homepage">E-Flete</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item active">
                        <a class="nav-link" href="/crearenvio">Crear Envío</a>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="/envios">Consultar Envíos</a>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="/modificarenvio">Modificar Envíos</a>
                      </li>
                    </ul>
                  </div>
                </nav>
            </header>
        );
    }
}

export default Header;