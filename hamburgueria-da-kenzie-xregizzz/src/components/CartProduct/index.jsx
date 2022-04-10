import "./styles.css";

function CartProduct({ id, img, name, category, deleteProduct }) {
  return (
    <div className="divCartProd">
      <div className="divCartProdDetails">
        <div className="divImgCartProd">
          <img className="imgCartProd" src={img} alt="procuct" />
        </div>
        <div className="detailsCartProd">
          <h1 className="nameCartProd">{name}</h1>
          <h3 className="categoryCartProd">{category}</h3>
        </div>
      </div>

      <span className="removeButtonCartProd" onClick={() => deleteProduct(id)}>
        Remover
      </span>
    </div>
  );
}

export default CartProduct;
