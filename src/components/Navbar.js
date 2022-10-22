import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <ul className="nav">
          <li>
            <Link to="/" className="nav-link">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/manajemen-buku" className="nav-link">
              Manajemen Buku
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
