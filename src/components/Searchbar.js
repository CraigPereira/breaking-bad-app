import React from "react";
import "../css/Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <form className="form">
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              placeholder="  Say my name"
              className="validate"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
