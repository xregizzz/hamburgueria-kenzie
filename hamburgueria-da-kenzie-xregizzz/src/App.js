import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart/Index";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  function showProducts(type) {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.category
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "") ===
            type
              .toLowerCase()
              .normalize("NFD")
              .replace(/\p{Diacritic}/gu, "") ||
          product.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "") ===
            type
              .toLowerCase()
              .normalize("NFD")
              .replace(/\p{Diacritic}/gu, "")
      )
    );
  }

  function handleClick(productId) {
    if (!currentSale.some((product) => product.id === productId)) {
      const selectedProd = products.find((element) => element.id === productId);
      setCurrentSale([...currentSale, selectedProd]);
    }
  }

  function deleteProduct(productId) {
    const filteredList = currentSale.filter(
      (product) => product.id !== productId
    );
    setCurrentSale(filteredList);
  }

  return (
    <div className="App">
      <header className="headerHtml">
        <Header showProducts={showProducts} />
      </header>
      <main className="main">
        <section className="sectionProdList">
          <ProductsList
            products={filteredProducts.length > 0 ? filteredProducts : products}
            handleClick={handleClick}
          />
        </section>
        <section className="cart">
          <Cart
            currentSale={currentSale}
            deleteProduct={deleteProduct}
            setCurrentSale={setCurrentSale}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
