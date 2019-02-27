import React from 'react';
import './Product.scss';

const Product = ({ product, onQuantityChange, onAddToCart }) => {
  const { pid, productName, brandName, productImage, size, availQty, quantity, regPrice, discPrice } = product;
  return (
    <section className="product">
      <section className="product__image"><img src={`${productImage}`} /></section>
      <section className="product__details">
        <div className="product__details__brand">{brandName}</div>
        <div className="product__details__name">{productName}</div>
        <div className="product__details__description">
          <span>Size {size}</span>
          <span className="separator">|</span>
          <span>Qty <small>{quantity}</small></span>
        </div>
      </section>

      <section className="product__quantity">
        <select onChange={e => onQuantityChange(e.target.value, pid)}>
          {availQty && availQty.map(qty => <option>{qty}</option>)}
        </select>
      </section>

      <section>
        <div className="product__price">
          <span className="product__price--regular">{`₹${regPrice * quantity}.00`}</span>
          <span className="product__price--discounted">{`₹${discPrice * quantity}.00`}</span>
        </div>
        <button className="product__actions" onClick={() => onAddToCart(pid)}>ADD TO CART</button>
      </section >
    </section >
  )
}

export default Product;