import React from "react";
import cross from "./img/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import feat1 from "./img/feat1.jpg";
import feat2 from "./img/feat2.png";
import feat3 from "./img/feat3.jpg";
import feat4 from "./img/feat4.png";
import feat5 from "./img/feat5.png";
import feat6 from "./img/feat6.png";
import feat7 from "./img/feat7.jpg";
import feat8 from "./img/feat8.jpg";
import feat9 from "./img/feat9.jpg";
import feat10 from "./img/feat10.jpg";
import feat11 from "./img/feat11.jpg";
import { remove, removeAll, changeAmount } from "../app/components/CartReducer";
import { Link } from "react-router-dom";

function totalPrice(array) {
    let total = 0;
    for (let i = 0; i < array.length; i ++) {
        let amount = array[i].amount;
        while (amount >= 1){
            total += array[i].price;
            amount --;
        }  
    }
    return total;
}

export default function Cart() {
    const cart = useSelector((state) => state.Cart);
    const dispatch = useDispatch();
    let priceTotal = totalPrice(cart);
    return (
        <div>
            <div className="container crumbs">
                <div>
                    <h2>SHOPPING CART</h2>
                </div>
            </div>
            <div className="container sCart">
                <div className="itemBox">
                    {cart.map(product => (
                        <div className="cartIt" key={product.id}>
                            <div className="cartItImg">
                                <img src={product.img} alt=""></img>
                            </div>
                            <div className="cartItText">
                                <h1>{product.name}</h1>
                                <h3>Price: $<span className="cartItPrice">{product.price}</span></h3>
                                <h3>Size: {product.size}</h3>
                                <div style={{textWrap: 'nowrap'}}>
                                    <h3>Quantity: <input type="number" defaultValue={1} onChange={(e) => {dispatch(changeAmount({id: product.id, amount: e.currentTarget.value}))}}></input></h3>
                                </div>
                            </div>
                            <div className="cartCross">
                                <button className="cartCross" onClick={() => {dispatch(remove(product.id))}}><img src={cross} alt=""></img></button>
                            </div>
                        </div>
                    ))}
                    <div className="cartNav">
                        <button className="cartNav1" onClick={() => {dispatch(removeAll())}}>CLEAR SHOPPING CART</button>
                        <button className="cartNav2"><Link to={'/catalog'}>CONTINUE SHOPPING</Link></button>
                    </div>
                </div>
                <div className="itemBox">
                    <div className="cartShipp">
                        <h4>SHIPPING ADRESS</h4>
                        <input type="text" placeholder="Bangladesh"></input>
                        <input type="text" placeholder="State"></input>
                        <input type="number" placeholder="Postcode/Zip"></input>
                        <input type="submit" className="cartSub" value="GET A QUOTE"></input>
                    </div>
                    
                    <div className="cartCheckout">
                        <div className="checkoutText">
                            <h6>SUB TOTAL $<span style={{marginLeft: '20 px'}}>{priceTotal}</span></h6>
                            <p>GRAND TOTAL <span className="checkoutPrice">${priceTotal}</span></p>
                            <div className="checkoutDiv">
                                <button>PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}