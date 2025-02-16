import React from 'react';
import ShoppingCart from '../assets/shopping-cart.svg';
import '../styles/Header.css';
import Search from '../assets/search.svg';
import Heart from '../assets/heart.svg';
import User from '../assets/user.svg';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        {/* Input de pesquisa */}
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={ShoppingCart} className="logo" alt="" />
          </a>
          <form className="d-flex" role="search">
            <div className="input-group">
              <input
                className="Pesquisa form-control"
                type="search"
                placeholder="Pesquisar produtos"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <img className="BtnPesquisa" src={Search} alt="" />
              </button>
            </div>
          </form>

          {/* Icons amarelos */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <img className="IconsNav" src={Heart} alt="Favoritos" /> Favoritos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="IconsNav" src={ShoppingCart} alt="Carrinho" /> Carrinho
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="IconsNav" src={User} alt="Conta" /> Conta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Div de Categorias */}
      <div className="categorias">
        <div className="dropdown">
          <a
            className="btn dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Todas as categorias
          </a>

          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>

        {/* Categorias espalhadas na mesma linha */}
        <nav className="nav">
          <a className="nav-link active" href="#">Frutas</a>
          <a className="nav-link" href="#">Bebidas</a>
          <a className="nav-link" href="#">Higiene</a>
          <a className="nav-link" href="#">Temperos</a>
          <a className="nav-link" href="#">Laticinios</a>
          <a className="nav-link" href="#">Açougue</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
