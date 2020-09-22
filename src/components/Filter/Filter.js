import React from "react";

import { CSSTransition } from "react-transition-group";

import "./Filter.css";

const Filter = ({ value, inputFilter }) => (
  <CSSTransition
    in={true}
    appear={true}
    classNames="find"
    timeout={500}
    unmountOnExit
  >
    <div className="findContact">
      <p>Find contacts by name or number</p>
      <input
        className="inputName"
        type="text"
        value={value}
        onChange={({ target }) => inputFilter(target.value)}
      />
    </div>
  </CSSTransition>
);

export default Filter;
