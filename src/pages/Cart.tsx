import { useCustomContext } from "../context/CustomContext";
import { Product } from "../types/productTypes";
import "../styles/cart.css";
import { Image } from "antd";
import { calculateTax, truncateText } from "../lib/util";
const Cart = () => {

  const { cart,subTotal } = useCustomContext();
  return (
    <>
      <div className="content--title">
        <h1>Shopping Cart</h1>
      </div>

{   cart.length>0 ?   (<div className="cart--container">
        <div className="cart--main">
          {cart.map((item: Product) => (
            <>
              <div key={item.id} className="cart--card">
                <div className="cart--image--wrapper">
                  <Image src={item.image} preview={false} />
                </div>

                <div className="cart--product--detail">
                  <h1>{item.title}</h1>
                  <p>{truncateText(item.description, "description", 130)}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="cart--sidebar">
          <div className="cart--order-summary">
            <h3>Order Summary</h3>
            <p>Sub Total : ${subTotal}</p>
            <p>Tax : ${calculateTax(subTotal)}</p>  
            <p>Total : ${subTotal+ +calculateTax(subTotal)}</p>
          </div>
        </div>
      </div>) :
        <div className="cart--empty--container">
          <h1>Cart Empty</h1>
      </div>
      }
    </>
  );
};

export default Cart;
