import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Noteful</h1>
      </Link>
    </div>
  );
}

export default Header;
