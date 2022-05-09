import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="search">
      <div className="search__inner">
        <input type="text" className="search__input" placeholder="Введите значение для поиска"/>
        <i className="search__icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Search;
