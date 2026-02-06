import "../styles/components/header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Header = () => {
  const { logout, user } = useAuth();
  return (
    <header className="header">
      <div className="header-brand">
        <img
          src="/images/federal.png"
          alt="Ave Federal"
          className="header-logo"
        />
        <div className="header-titles">
          <h1 className="header-title">
            <Link to="/">Vivero Federal</Link>​
          </h1>
          <p className="header-subtitle">Plantas nativas</p>
        </div>
      </div>

      <nav>
        <ul className="web-nav">
          {user && (
            <li>
              <Link to="/">Inicio</Link>
            </li>
          )}
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
        </ul>
      </nav>
      <nav className="user-nav">
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
        {user && (
          <>
            <p className="user-name">{user.email}</p>
            <button onClick={logout} className="logout-button">
              Cerrar sesión
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
