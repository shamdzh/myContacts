import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Search: React.FC = () => {
  const { text } = useTypedSelector((state) => state.search);
  const { setText } = useActions();

  useEffect(() => {
    console.log(text);
  });

  return (
    <div className="search">
      <div className="search__inner">
        <input
          type="text"
          className="search__input"
          placeholder="Введите значение для поиска"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <i className="search__icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Search;
