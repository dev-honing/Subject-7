// src/Component/Container/Content/SearchForm/SearchForm.tsx

import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form action="/" method="get">
      <input type="text" className="searchName" placeholder="Write your name." />
      <label htmlFor="searchName"></label>

      <button type="submit" className="showButton">Show</button>
      <label htmlFor="showButton"></label>
    </form>
  );
};

export default SearchForm;
