import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function PageHeader({ children, title }) {
  return (
    <header className="page-header">
      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
}

export default PageHeader;
