import "./styles.css";
import { useState } from "react";

function Header({ showProducts }) {
  const [filteredWord, setFilteredWord] = useState("");

  return (
    <div className="header">
      <div className="divLogo">
        <h1>Xizao</h1>
        <h3>Kenzie</h3>
      </div>
      <div className="divPesquisa">
        <input
          className="inputPesquisa"
          type="text"
          placeholder="Digitar Pesquisa"
          onKeyUp={(event) => setFilteredWord(event.target.value)}
        />
        <button
          onClick={() => showProducts(filteredWord)}
          className="btnPesquisar"
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
}

export default Header;
