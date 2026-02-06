import "../styles/components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Envíos */}
        <div className="footer-section">
          <h4 className="footer-title">🚚 Envíos</h4>
          <p>Córdoba Capital</p>
          <p>Retiro por vivero (con coordinación)</p>
          <p>Lunes a viernes</p>
        </div>

        {/* Contacto */}
        <div className="footer-section">
          <h4 className="footer-title">📱 Contacto</h4>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/5493510000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 351 000 0000
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:viverofederal@gmail.com">viverofederal@gmail.com</a>
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>

        {/* Pagos */}
        <div className="footer-section">
          <h4 className="footer-title">💳 Medios de pago</h4>
          <p>Transferencia bancaria</p>
          <p>Mercado Pago</p>
          <p>Efectivo al retirar</p>
        </div>

        {/* Marca / autor */}
        <div className="footer-section">
          <h4 className="footer-title">🌿 Vivero Federal</h4>
          <p>Plantas nativas de Córdoba</p>
          <p className="footer-author">
            2026 — Andrés Martínez Bologna. Sitio de ficción. + info en "sobre
            nosotros"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
