import React from "react";
import "../css/Searchbar.css";

const Searchbar = ({ characters, setSearchField, handleSumbit }) => {
  return (
    <div className="searchbar">
      <form className="form" onSubmit={handleSumbit}>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              placeholder="  Say my name"
              className="validate"
              onChange={setSearchField}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
