import React from "react";
import fil1 from "./img/fil1.svg";
import fil2 from "./img/fil2.svg";
import cart from "./img/cart.svg";
import arrowL from "./img/arrowL.svg";
import arrowR from "./img/arrowR.svg";
import as1 from "./img/as1.svg";
import as2 from "./img/as2.svg";
import as3 from "./img/as3.svg";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../app/components/CartReducer";


export default function Catalogue() {
    const products = useSelector((state) => state.Items);
    const first9Products = products.filter((value) => {
        return value.id < 10;
    });
    const dispatch = useDispatch();
    const cartSelect = useSelector((state) => state.Cart);
        console.log(cartSelect);
    return (
        <div>
            <div className="container crumbs">
                <div>
                    <h2>NEW ARRIVALS</h2>
                </div>
                <p>
                    <a href="./">HOME</a> / <a href="#" className="accentColor">MEN</a> / <a href="./product">NEW ARRIVALS</a>
                </p>
            </div>
                <div className="container catalog">
                    <div className="catFilters">
                        <button className="filter"><span className="filH">FILTER </span><img src={fil1} alt=""></img></button>
                        <button className="greyColor">TRENDING NOW <img src={fil2} alt=""></img></button>
                        <button className="sizeB greyColor">SIZE <img src={fil2} alt=""></img></button>
                        <button className="greyColor">PRICE <img src={fil2} alt=""></img></button>
                        <div className="filterDD dropF">
                            <div className="filterDDCat accentColor">CATEGORY</div>
                            <p>Accessories</p>
                            <p>Bags</p>
                            <p>Denim</p>
                            <p>Hoodies & Sweatshirts</p>
                            <p>Jackets & Coats</p>
                            <p>Polos</p>
                            <p>Shirts</p>
                            <p>Shoes</p>
                            <p>Sweaters & Knits</p>
                            <p>T-Shirts</p>
                            <p>Tanks</p>
                            <div className="filterDDCat">BRAND</div>
                            <div className="filterDDCat">DESIGNER</div>
                        </div>
                        <form className="size sizeH">
                            <input type="checkbox" name="XS" value="XS"></input>
                            <label name="XS">XS</label><br></br>
                            <input type="checkbox" name="S" value="S"></input>
                            <label name="S">S</label><br></br>
                            <input type="checkbox" name="M" value="M"></input>
                            <label name="M">M</label><br></br>
                            <input type="checkbox" name="L" value="L"></input>
                            <label name="L">L</label>
                        </form>
                    </div>
                    <div className="catContent">
                        {first9Products.map(product => (
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
                                <h5>{product.price}</h5>
                            </div>
                        ))}
                    </div>
                    <div className="catPager">
                        <img src={arrowL} alt=""></img>
                        <p><span className="accentColor">1</span> 2 3 4 5 6.....20 </p> <img src={arrowR} alt=""></img>
                    </div>
                </div>
            <div className="assurance">
                <div className="asItem">
                    <img src={as1} alt=""></img>
                    <h4>Free Delivery</h4>
                    <h5>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</h5>
                </div>
                <div className="asItem">
                    <img src={as2} alt=""></img>
                    <h4>Sales & discounts</h4>
                    <h5>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</h5>
                </div>
                <div className="asItem">
                    <img src={as3} alt=""></img>
                    <h4>Quality assurance</h4>
                    <h5>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</h5>
                </div>
            </div>
        </div>
    );
}