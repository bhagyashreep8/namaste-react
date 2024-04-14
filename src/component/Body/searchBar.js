const SearchBar = (props) => {
  return (
    <div className="search-bar-container">
      <form className="search-bar-form material-symbols-outlined">
        <input className="search-bar "
          type="text"
          placeholder="Search for restaurants and food"
          value={props.userInput}
          onChange={props.handleOnChangeSearchInput}
        />
        <button className="search-btn" onClick={props.handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
