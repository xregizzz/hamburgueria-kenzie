import "./styles.css";
function Product({ id, img, name, category, price, handleClick }) {
  return (
    <div className="divProduct">
      <div className="divImgProduct">
        <img className="imgProduct" src={img} alt="produto" />
      </div>
      <h1 className="nameProduct">{name}</h1>
      <h3 className="categoryProduct"> {category}</h3>
      <span className="priceProduct">R$: {Number(price).toFixed(2)}</span>
      <button className="buttonProduct" onClick={() => handleClick(id)}>
        Adicionar
      </button>
    </div>
  );
}

export default Product;
