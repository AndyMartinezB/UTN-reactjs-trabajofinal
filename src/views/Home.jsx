import { useState, useEffect } from "react";
import "../styles/views/home.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../services/apiFirebase.js";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    scientificName: "",
    category: "",
    units: 0,
    value: 0,
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchProducts = async () => {
    const productsList = await getAllProducts();
    setProducts(productsList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProduct) {
      const res = await updateProduct(editingProduct.id, formData);
      const updatedProducts = products.map((product) =>
        product.id === editingProduct.id ? res : product,
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
    } else {
      const addedProduct = await addProduct({
        name: formData.name,
        scientificName: formData.scientificName,
        category: formData.category,
        units: parseInt(formData.units),
        value: parseFloat(formData.value),
        image: formData.image,
        description: formData.description,
      });
      setProducts([...products, addedProduct]);
    }
    setFormData({
      name: "",
      scientificName: "",
      category: "",
      units: 0,
      value: 0,
      image: "",
      description: "",
    });
  };

  const handleUpdateProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      scientificName: product.scientificName,
      category: product.category,
      units: product.units,
      value: product.value,
      image: product.image,
      description: product.description,
    });
  };

  const handleDeleteProduct = async (id) => {
    try {
      if (!confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        return;
      }
      const idDeletedProduct = await deleteProduct(id);
      alert("Producto eliminado correctamente");
      const filteredProducts = products.filter((product) => product.id !== id);
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="home-container">
          <h2 className="home-title">Bienvenidos al Vivero Federal</h2>
          <p className="home-description">
            En nuestro vivero encontrarás una amplia variedad de plantas nativas
            cuidadosamente cultivadas para promover la biodiversidad y conservar
            el ecosistema local. Nuestro compromiso es ofrecer plantas
            saludables que se adapten perfectamente a tu entorno, ayudándote a
            crear un espacio verde sostenible y armonioso.
          </p>
          <p className="home-description">
            Explora nuestra colección y descubre cómo puedes contribuir al
            cuidado del medio ambiente a través de la jardinería con plantas
            nativas.
          </p>
        </section>
        <section className="products-placeholder">
          <h3 className="products-title">Catálogo de Productos</h3>
          <div className="products-list">
            {products.map((product) => (
              <div key={product.id}>
                <div className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-scientific-name">
                    {product.scientificName}
                  </p>
                  <p className="product-category">{product.category}</p>
                  <p className="product-description">{product.description}</p>
                  <p className="product-units">
                    Unidades disponibles: {product.units}
                  </p>
                  <div className="buy">
                    <p className="product-value">Valor: ${product.value}</p>
                    <button className="buy-button">Comprar</button>
                    <button
                      className="update-button"
                      onClick={() => handleUpdateProduct(product)}
                    >
                      Actualizar
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="add-product-form-section">
          <h3 className="form-title"> Añadir un producto</h3>
          <form className="add-product-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre del producto"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="scientificName"
              placeholder="Nombre científico"
              value={formData.scientificName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Categoría"
              value={formData.category}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="units"
              placeholder="Unidades"
              value={formData.units}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="value"
              placeholder="Valor"
              value={formData.value}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="URL de la imagen"
              value={formData.image}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Descripción"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">
              {editingProduct ? "Actualizar Producto" : "Añadir Producto"}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
