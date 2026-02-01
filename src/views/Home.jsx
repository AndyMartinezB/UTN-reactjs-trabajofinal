import "../styles/views/home.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <h2 className="home-title">Bienvenidos al Vivero Federal</h2>
        <p className="home-description">
          En nuestro vivero encontrarás una amplia variedad de plantas nativas
          cuidadosamente cultivadas para promover la biodiversidad y conservar
          el ecosistema local. Nuestro compromiso es ofrecer plantas saludables
          que se adapten perfectamente a tu entorno, ayudándote a crear un
          espacio verde sostenible y armonioso.
        </p>
        <p className="home-description">
          Explora nuestra colección y descubre cómo puedes contribuir al cuidado
          del medio ambiente a través de la jardinería con plantas nativas.
        </p>
      </div>
      <div className="products-placeholder">
        <h3 className="products-title">Próximamente: Catálogo de Productos</h3>
        <p className="products-description">
          Estamos trabajando para traerte un catálogo completo de nuestras
          plantas nativas. ¡Mantente atento a las novedades!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
