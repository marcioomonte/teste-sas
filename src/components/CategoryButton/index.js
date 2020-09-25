import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function CategoryButton({ category, onClick }) {
  return (
    <div className="buttons-container">
      <Link
        to={{ pathname: "/questions", state: category }}
        className="category-button"
      >
        {category.name}
      </Link>
    </div>
  );
}

export default CategoryButton;
