import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { login } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await login(formData.email, formData.password);
      setSuccess("Login successful!");
      Maps("/");
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
    }
  };
  return (
    <>
      <Header />
      <h2>Login Page</h2>
      <main className="login-main">
        <section className="login-card">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Ingresar</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
