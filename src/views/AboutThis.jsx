import "../styles/views/aboutThis.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutThis = () => {
  return (
    <>
      <Header />
      <main className="about-main">
        <div className="about-container">
          <section className="about-header">
            <h2>Sobre este Proyecto</h2>
            <p className="about-intro">
              Trabajo Final Integrador para el curso de React JS. Esta
              aplicación es un dashboard de gestión para un Vivero de Plantas
              Nativas, permitiendo administrar un catálogo de productos con
              persistencia en la nube.
            </p>
          </section>

          <section className="about-section">
            <h3>🛠 Tecnologías Utilizadas</h3>
            <ul className="tech-list">
              <li>React JS (Vite)</li>
              <li>React Router DOM (Navegación)</li>
              <li>Firebase Auth (Autenticación)</li>
              <li>Firestore Database (Base de datos NoSQL)</li>
              <li>CSS Nativo (Diseño Responsive)</li>
            </ul>
          </section>

          <section className="about-section">
            <h3>📂 Estructura del Proyecto</h3>
            <p>
              El proyecto sigue una arquitectura organizada por
              responsabilidades:
            </p>
            <ul className="structure-list">
              <li>
                <strong>/components:</strong> Piezas reutilizables de UI
                (Header, Footer, ProtectedRoute).
              </li>
              <li>
                <strong>/views:</strong> Páginas principales (Home, Login,
                Register, About).
              </li>
              <li>
                <strong>/context:</strong> Manejo de estado global
                (AuthContext).
              </li>
              <li>
                <strong>/services:</strong> Lógica de conexión con Firebase.
              </li>
              <li>
                <strong>/styles:</strong> Archivos CSS modulares.
              </li>
            </ul>
          </section>

          <section className="about-section">
            <h3>🔐 Implementación de AuthContext</h3>
            <p>
              La autenticación se gestiona mediante un{" "}
              <strong>Contexto Global</strong> que:
            </p>
            <ul>
              <li>
                Escucha los cambios en Firebase (<code>onAuthStateChanged</code>
                ).
              </li>
              <li>
                Expone el objeto <code>user</code> y métodos (login, register,
                logout) a toda la app.
              </li>
              <li>
                Protege rutas privadas evitando el acceso a usuarios no
                logueados mediante el componente <code>ProtectedRoute</code>.
              </li>
            </ul>
          </section>

          <section className="about-section">
            <h3>💡 Dificultades y Soluciones</h3>
            <div className="challenge-card">
              <h4>Manejo de rutas protegidas al refrescar</h4>
              <p>
                <strong>Problema:</strong> Al recargar la página, la app
                redirigía al Login antes de que Firebase confirmara la sesión.
                <br />
                <strong>Solución:</strong> Se implementó un estado de{" "}
                <code>loading</code> en el AuthContext para esperar la respuesta
                de Firebase antes de renderizar las rutas.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutThis;
