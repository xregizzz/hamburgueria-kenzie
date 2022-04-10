import Product from "../Product";
import "./styles.css";

function ProductsList({ products, handleClick }) {
  return (
    <ul className="ulProductList">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          img={product.img}
          name={product.name}
          category={product.category}
          price={product.price}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default ProductsList;
