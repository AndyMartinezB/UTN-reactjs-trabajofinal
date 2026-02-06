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
              Trabajo Final Integrador para el curso de{" "}
              <a
                href="https://sceu.frba.utn.edu.ar/e-learning/detalle/curso/35189/curso-de-desarrollo-en-react-js?gad_source=1&gad_campaignid=23095914428&gbraid=0AAAAAD-5DJvz6FlieD825bBJhNoe1Zwou&gclid=CjwKCAiAv5bMBhAIEiwAqP9GuBTmWL6XcPV2AmwUVX6SKzR8qtzgGt8vztkVN0ISPzw9km5-FPImmxoCUaQQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Desarrollo en React JS de la UTN.BA
              </a>
              . Esta aplicación es un sitio de gestión para un Vivero de Plantas
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
            <div className="challenge-card">
              <h4>Uniformidad visual en el catálogo de productos</h4>
              <p>
                <strong>Problema:</strong> Las descripciones de los productos
                tenían longitudes variables, lo que provocaba tarjetas de
                diferentes alturas y un diseño desordenado en el catálogo,
                afectando la legibilidad y la experiencia de usuario.
                <br />
                <strong>Solución:</strong> Se decidió limitar inicialmente la
                cantidad de texto visible en cada tarjeta y agregar un control
                de <em>“Ver más / Ver menos”</em>. Esta decisión permitió
                mantener una grilla visualmente uniforme, mejorar la
                escaneabilidad del catálogo y darle al usuario control sobre
                cuándo expandir la información sin romper el layout.
              </p>
            </div>
          </section>
          <section className="about-section about-credits">
            <h3>🌱 Créditos e Inspiración</h3>

            <p>
              Este proyecto fue inspirado en el trabajo del{" "}
              <strong>Vivero Churrinche</strong>, un vivero dedicado a la
              producción y difusión de plantas nativas de la región de Córdoba.
            </p>

            <p>
              Las imágenes, descripciones de productos y la selección de
              especies utilizadas en esta aplicación se basan en el catálogo y
              el enfoque educativo del Vivero Churrinche, cuyo trabajo es una
              referencia en la promoción de la flora nativa.
            </p>

            <p>
              Este dashboard fue desarrollado con fines{" "}
              <strong>educativos y académicos</strong>, como parte de un trabajo
              final, y no representa una tienda oficial ni tiene fines
              comerciales.
            </p>

            <div className="credits-highlight">
              <p>
                🌿 Si te interesa aprender más sobre plantas nativas o adquirir
                ejemplares, te recomendamos visitar y seguir el trabajo de
                vivero Churrinche:
              </p>

              <ul className="credits-links">
                <li>
                  🌐 Sitio web:{" "}
                  <a
                    href="https://viverochurrinche.empretienda.com.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vivero Churrinche
                  </a>
                </li>
                <li>
                  📸 Instagram:{" "}
                  <a
                    href="https://instagram.com/churrinche_nativas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @viverochurrinche
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutThis;
