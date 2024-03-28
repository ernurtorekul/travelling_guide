import "./Error.css";
import React from "react";
import { Link } from "react-router-dom";
import errorimg from "../media/error.png";

export const Error = () => {
  return (
    <>
      <div className="e-container">
        <div className="e-message">
          <img src={errorimg} alt="" id="error-img" />
          <h1>404</h1>
          <p>Ой! URL мекенжайында қате бар сияқты.</p>
          <p>
            Артқа өтіңіз{" "}
            <span>
              <Link to="/">homepage</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
