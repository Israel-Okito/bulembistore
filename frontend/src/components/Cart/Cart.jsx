import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51Mfv5SLP27PgXn3P3xMhoGs0v7QZTtph7W676s80wR3EzQgnjiJtP9UE9JDYCIbojTb5xRsOnXG5cTTPLTVCXEki00pVFdNrbO"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <h1>Produit dans votre panier</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 60)} ...</p>
            <div className="price">
             Qté:  {item.quantity} <br/>
             Prix: TND{item.price}
            </div>
          </div>
          <p
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}>
              supprimer
           </p>
        
        </div>
      ))}
      <div className="total">
        <span>Total</span>
        <span>TND{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>Procéder à l'achat</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Actualier le panier
      </span>
    </div>
  );
};

export default Cart;