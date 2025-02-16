import React from "react";
import img3 from "./img/feat3.jpg";
import cross from "./img/cross.svg";
import img7 from "./img/feat7.jpg";

export default function Cart() {
    return (
        <div>
            <div className="container crumbs">
                <div>
                    <h2>SHOPPING CART</h2>
                </div>
            </div>
            <div className="container sCart">
                <div className="cartIt">
                    <div className="cartItImg">
                        <img src={img3} alt=""></img>
                    </div>
                    <div className="cartItText">
                        <h1>MANGO PEOPLE T-SHIRT</h1>
                        <h3>Price: <span className="cartItPrice">$300</span></h3>
                        <h3>Color: Red</h3>
                        <h3>Size: Xl</h3>
                        <div style={{textWrap: 'nowrap'}}>
                            <h3>Quantity: <input type="number" value="1"></input></h3>
                        </div>
                    </div>
                    <div className="cartCross">
                        <button className="cartCross"><img src={cross} alt=""></img></button>
                    </div>
                </div>
                <div className="cartShipp">
                    <h4>SHIPPING ADRESS</h4>
                    <input type="text" placeholder="Bangladesh"></input>
                    <input type="text" placeholder="State"></input>
                    <input type="number" placeholder="Postcode/Zip"></input>
                    <input type="submit" className="cartSub" value="GET A QUOTE"></input>
                </div>
                <div className="cartIt cartIt2">
                    <div className="cartItImg">
                        <img src={img7} alt=""></img>
                    </div>
                    <div className="cartItText">
                        <h1>MANGO PEOPLE T-SHIRT</h1>
                        <h3>Price: <span className="cartItPrice">$300</span></h3>
                        <h3>Color: Red</h3>
                        <h3>Size: Xl</h3>
                        <div style={{textWrap: 'nowrap'}}>
                            <h3>Quantity: <input type="number" value="1"></input></h3>
                        </div>
                    </div>
                    <div className="cartCross">
                        <button className="cartCross"><img src={cross} alt=""></img></button>
                    </div>
                </div>
                <div className="cartCheckout">
                    <div className="checkoutText">
                        <h6>SUB TOTAL <span style={{marginLeft: '20 px'}}>$900</span></h6>
                        <p>GRAND TOTAL <span className="checkoutPrice">$900</span></p>
                        <div className="checkoutDiv">
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
                <div className="cartNav">
                    <button className="cartNav1">CLEAR SHOPPING CART</button>
                    <button className="cartNav2">CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>
    );
}