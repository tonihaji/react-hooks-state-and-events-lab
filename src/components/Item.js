import React,{useState} from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleAddToCartClick() {
    setInCart((inCart) => !inCart)
  }

  const className = inCart ? "in-cart" : "";

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>
        {inCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}
export default Item;