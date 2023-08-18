import React from 'react';
import css from "./Searchbar.module.css";

// function onSubmit(){

// }

export default function Searchbar({onSubmit}) {
  return (
    <header className={css.searchBar}>
      <form className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}
