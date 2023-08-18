import React from 'react';
import css from "./Searchbar.module.css";



export default function Searchbar({onSubmit}) {

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchString = evt.target['1'].value
    onSubmit(searchString)
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          name="searchString"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}
