import "./styles.css";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

function Cart({ currentSale, deleteProduct, setCurrentSale }) {
  return (
    <div>
      <div className="HeaderCart">
        <h1>Carrinho de compras</h1>
      </div>

      {currentSale.length < 1 ? (
        <div className="divEmptyCart">
          <h1>Sua Sacola esta vazia</h1>
          <h3>Adicionar Itens</h3>
        </div>
      ) : (
        <div>
          <ul className="ulCart">
            {currentSale.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                img={product.img}
                name={product.name}
                category={product.category}
                deleteProduct={deleteProduct}
              />
            ))}
          </ul>
          <CartTotal
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
