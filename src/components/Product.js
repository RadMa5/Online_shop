import React from "react";
import wind from "./img/wind1.svg";
import wind2 from "./img/wind2.svg";
import windpng from "./img/wind.png";
import fil2 from "./img/fil2.svg";
import cart2 from "./img/cart2.svg";
import cart from "./img/cart.svg";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../app/components/CartReducer";

export default function Product() {
    const products = useSelector((state) => state.Items);
    const showcase = products[12];
    console.log(showcase);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="container crumbs">
                <div>
                    <h2>NEW ARRIVALS</h2>
                </div>
                <p>
                    <a href="/">HOME</a> / <a href="/catalog">MEN</a> / <a href="#">NEW ARRIVALS</a>
                </p>
            </div>
            <div>
                <div className="window">
                    <button className="windowB"><img src={wind} alt=""></img></button>
                    <img src={windpng} style={{zIndex: 0}}></img>
                    <button className="windowB"><img src={wind2} alt=""></img></button>
                </div>
                <div className="container">
                    <div className="description">
                        <div className="descriptUp">
                            <div className="dividerUp">WOMEN COLLECTION</div>
                            <h2>{showcase.title}</h2>
                            <h3>{showcase.desc}</h3>
                            <h1>${showcase.price}</h1>
                        </div>
                        <div className="descriptDown">
                            <div className="dFilters">
                                <button className="descriptFilt">CHOOSE COLOR <img src={fil2} alt=""></img></button>
                                <button className="descriptFilt">CHOOSE SIZE <img src={fil2} alt=""></img></button>
                                <button className="descriptFilt">QUANTITY <img src={fil2} alt=""></img></button>
                            </div>
                            <button className="browseAllB" onClick={() => {dispatch(add(showcase))}}><img src={cart2} alt=""></img> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <ItemList amount={3} classStr={{className: "container catContent prodContent"}} />
        </div>
    );
}