import React from "react";
import "../styles/inputs.scss";

import check from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg";

function Inputs() {
  return (
    <section className="input">
      <div className="createInput">

        <button className="check">
          {/* <img src={check} alt="" /> */}
        </button>

        <input
          className="inputText"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>

      <div className="list-todo">
            <div className="list-task">
                <input type="text" className="task"/>
                <hr  className="hr"  />
            </div>
           
      </div>

      <div className="clear">
<button className="btn-item">items left</button>
<button className="btn-clear">Clear Completed</button>
      </div>

      <div className="select">
<button className="btn-all">All</button>
<button className="btn-active">Active</button>
<button className="btn-completed">Completed</button>
      </div>
    </section>
  );
}

export default Inputs;
