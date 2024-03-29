import React from "react";
import "./Paginado.css";

export default function Paginado({
  allPokemons,
  pokemonsPerPage,
  changePage,
  currentPage,
}) {
  const pageNumbers = Math.ceil(allPokemons / pokemonsPerPage);
  const pageNumbersArray = [];

  for (let i = 0; i < pageNumbers; i++) {
    pageNumbersArray.push(i + 1);
  }

  return (
    <div className="paginado">
      {
        // Creo un boton prev
        pageNumbersArray && (
          <button
            className="buttonPaginado"
            key="prev"
            onClick={() => {
              changePage(currentPage > 1 ? currentPage - 1 : null);
            }}
          >
            Prev
          </button>
        )
      }
      {
        // Creo un boton por cada numero
        pageNumbersArray &&
          pageNumbersArray.map((page) => (
            <button
              className={
                page === currentPage
                  ? "buttonPaginadoSelected"
                  : "buttonPaginado"
              }
              key={page}
              onClick={() => {
                changePage(page);
              }}
            >
              {page}
            </button>
          ))
      }
      {
        // Creo un boton next
        pageNumbersArray && (
          <button
            className="buttonPaginado"
            key="next"
            onClick={() => {
              changePage(currentPage < pageNumbers ? currentPage + 1 : null);
            }}
          >
            Next
          </button>
        )
      }
    </div>
  );
}
