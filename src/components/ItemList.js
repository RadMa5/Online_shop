import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cart from "./img/cart.svg";
import { add } from "../app/components/CartReducer";

export default function ItemList({amount, classStr}) {
    const products = useSelector((state) => state.Items);

    const firstProducts = products.filter(value => 
        products.indexOf(value) < amount
    );

    const dispatch = useDispatch();
    const newClass = classStr.className;
    return (
        <div className={newClass}>
            {firstProducts.map(product => (
                    <div className="featIt" key={product.id}>
                        <div className="cartIt">
                            <img className="carImg" src={product.img} alt=""></img>
                            <div className="cartD">
                                <button className="cartB" onClick={() => {
                                    dispatch(add(product));
                                }}><img src={cart} alt=""></img>Add to Cart</button>
                            </div>
                        </div>
                    <h4>{product.title}</h4>
                    <h6>{product.desc}</h6>
                    <h5>${product.price}</h5>
                </div>
            ))}
        </div>
    );
}
