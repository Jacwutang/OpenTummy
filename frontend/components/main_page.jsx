import React from 'react';

const MainPage = () => (
  <div className = "main-page"> MainPage
  <form>

  <span>
    <i className="fa fa-search fa-2x" aria-hidden="true"></i>
    <input type="text" className = "search-input"
    name="search"
    placeholder="Location, Restaurant.."></input>

    <button type="button" className = "search-button"> Find a Table </button>
  </span>

  </form>

  </div>

)

export default MainPage;
