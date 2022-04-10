import "./styles.css";
function CartTotal({ setCurrentSale, currentSale }) {
  const totalPrice = currentSale.reduce((a, b) => a + b.price, 0);

  return (
    <div className="divCartTotal">
      <div className="divDetailsTotal">
        <h1 className="totalName">Total</h1>
        <span className="totalSpan">
          R$: {totalPrice.toFixed(2).toString().replace(".", ",")}
        </span>
      </div>
      <button className="buttonRemoveAll" onClick={() => setCurrentSale([])}>
        Remover Todos
      </button>
    </div>
  );
}

export default CartTotal;
