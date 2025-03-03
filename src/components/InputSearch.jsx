import { useState } from "react";
import {Search} from "../utils/Icons"
import "../styles/InputSearch.css";

const SearchBar = () => {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className={`input-group ${expandido ? "expandido" : ""}`}>
      <input
        className="Pesquisa form-control"
        type="search"
        placeholder="Pesquisar produtos"
        aria-label="Search"
        style={{ display: expandido ? "block" : "none" }} // Esconde o input quando não está expandido
      />
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={() => setExpandido(!expandido)} // Alterna o estado ao clicar
      >
        <img className="BtnPesquisa" src={Search} alt="Pesquisar" />
      </button>
    </div>
  );
};

export default SearchBar;
