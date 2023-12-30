// src/Component/Container/Content/SearchForm/SearchForm.tsx

import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form action="/">
      <input type="text" placeholder="Write your name." />
      <button type="submit">Show</button>
    </form>
  );
};

export default SearchForm;
