import "../styles/components/header.css";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Header = () => {
  const { logout, user } = useAuth();
  return (
    <header className="header">
      <h1 className="header-title">Vivero federal​</h1>
      <p className="header-subtitle">Plantas nativas </p>
      <nav>
        <ul className="header-nav">
          {user && (
            <li>
              <Link to="/">Inicio</Link>
            </li>
          )}
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>

          {!user && (
            <>
              <li>
                <Link to="/register">Registrarse</Link>
              </li>
              <li>
                <Link to="/login">Iniciar sesión</Link>
              </li>
            </>
          )}
        </ul>
        {user && <button onClick={logout}>Cerrar sesión</button>}
      </nav>
    </header>
  );
};

export default Header;
