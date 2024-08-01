import React from "react";
import "./header.css";
import "../../App.css";
import img from "../../assets/img.png";

function header() {
  return (
    <div className="headerrr">
      <div className="container">
        <div className="hed">
          <div className="logo">
            <img className="img" src={img} alt="" />
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-itms">
                <a href="">Home</a>
              </li>
              <li className="nav-itms">
                <a href="">Contact</a>
              </li>
              <li className="nav-itms">
                <a href="">About</a>
              </li>
              <li className="nav-itms">
                <a href="">Phone</a>
              </li>
            </ul>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <input
              type="text"
              name="text"
              class="input"
              placeholder="Write a message"
            />

            <button>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
