import React from "react";

const Header = () => {
  return (
    <header>
      <div>HOMEPAGE</div>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Recipes</li>
        <li>Comments</li>
      </ul>
    </header>
  );
};

export default Header;
