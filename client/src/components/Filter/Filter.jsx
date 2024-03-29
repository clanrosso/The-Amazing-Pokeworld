import React from "react";
import "./Filter.css";

const Filter = ({ filterApiOrDb, filterType, handleOrder, allTypes }) => {
  return (
    <div className="filter">
      <select
        className="select"
        key="filterApiOrDb"
        onChange={(e) => filterApiOrDb(e)}
      >
        <option selected defaultValue disabled>
          Existentes o creados
        </option>
        <option value="all">Todos los Pokemons</option>
        <option value="db">Pokemons creados</option>
        <option value="api">Pokemons existentes</option>
      </select>

      <select
        className="select"
        key="filterType"
        onChange={(e) => filterType(e)}
      >
        <option selected defaultValue disabled>
          Selecciona un tipo
        </option>
        <option value="all">Todos los Pokemons</option>
        {allTypes &&
          allTypes.map((t) => {
            return (
              <option key={t.name} value={t.name}>
                {t.name[0].toUpperCase() + t.name.slice(1)}
              </option>
            );
          })}
      </select>

      <select
        className="select"
        key="order_alfabet"
        onChange={(e) => handleOrder(e)}
      >
        <option selected defaultValue disabled>
          Orden por alfabeto
        </option>
        <option value="asc_alfabet">De la A a la Z</option>
        <option value="desc_alfabet">De la Z a la A</option>
      </select>

      <select
        className="select"
        key="order_attack"
        onChange={(e) => handleOrder(e)}
      >
        <option selected defaultValue disabled>
          Orden ataque
        </option>
        <option value="desc_attack">Los mas fuertes</option>
        <option value="asc_attack">Los mas debiles</option>
      </select>
    </div>
  );
};

export default Filter;
