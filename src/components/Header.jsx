import { Link } from 'react-router-dom';
import '../styles/Header.css';
import {ShoppingCart, Search, Heart, User} from '../utils/Icons';
import InputSearch from "../components/inputSearch";

const SearchBar = () => (
  <form className="d-flex" role="search">
    <InputSearch/>
  </form>
);

const NavItem = ({ icon, text, href }) => (
  <li className="nav-item">
      <Link to={href}>
      <span className="nav-link">
        <img className="IconsNav" src={icon} alt={text} /> {text}
      </span>
    </Link>
  </li>
);

const Dropdown = () => (
  <div className="dropdown mb-3">
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
      {['Frutas', 'Bebidas', 'Higiene', 'Temperos', 'Laticínios', 'Açougue'].map((categoria) => (
        <li key={categoria}>
          <a className="dropdown-item" href="#">{categoria}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-none d-md-flex" href="#">
            <img src={ShoppingCart} className="logo " alt="Logo" />
          </a>
          <SearchBar />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavItem icon={Heart} text="Favoritos" href="#" />
              <NavItem icon={ShoppingCart} text="Carrinho" href="#" />
              <NavItem icon={User } text="Conta" href="/login" />
            </ul>
          </div>
        </div>
      </nav>

      <div className="categorias">
        <Dropdown />
        <nav className="navCategorias d-none d-md-flex">
          {['Frutas', 'Bebidas', 'Higiene', 'Temperos', 'Laticínios', 'Açougue'].map((categoria) => (
            <a className="nav-link" href="#" key={categoria}>{categoria}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;