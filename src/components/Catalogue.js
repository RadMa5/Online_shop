import React from "react";
import fil1 from "./img/fil1.svg";
import fil2 from "./img/fil2.svg";
import cart from "./img/cart.svg";
import feat1 from "./img/feat1.jpg";
import feat7 from "./img/feat7.jpg";
import feat3 from "./img/feat3.jpg";
import feat4 from "./img/feat4.png";
import feat8 from "./img/feat8.jpg";
import feat9 from "./img/feat9.jpg";
import feat10 from "./img/feat10.jpg";
import feat11 from "./img/feat11.jpg";
import feat12 from "./img/feat12.jpg";
import arrowL from "./img/arrowL.svg";
import arrowR from "./img/arrowR.svg";
import as1 from "./img/as1.svg";
import as2 from "./img/as2.svg";
import as3 from "./img/as3.svg";


export default function Catalogue() {
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
                            <label for="XS">XS</label><br></br>
                            <input type="checkbox" name="S" value="S"></input>
                            <label for="S">S</label><br></br>
                            <input type="checkbox" name="M" value="M"></input>
                            <label for="M">M</label><br></br>
                            <input type="checkbox" name="L" value="L"></input>
                            <label for="L">L</label>
                        </form>
                    </div>
                    <div className="catContent">
                        <div className="featIt">
                            <div className="cartIt">
                                <img className="carImg" src={feat1} alt=""></img>
                                <div className="cartD">
                                    <button className="cartB"><img src={cart} alt=""></img>Add to Cart</button>
                                </div>
                            </div>
                            <h4>ELLERY X M'O CAPSULE</h4>
                            <h6>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</h6>
                            <h5>$52.00</h5>
                        </div>
                        <div className="featIt">
                            <div className="cartIt">
                                <img className="carImg" src={feat7} alt=""></img>
                                <div className="cartD">
                                    <button className="cartB"><img src={cart} alt=""></img>Add to Cart</button>
                                </div>
                            </div>
                            <h4>ELLERY X M'O CAPSULE</h4>
                            <h6>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</h6>
                            <h5>$52.00</h5>
                        </div>
                        <div className="featIt">
                            <div className="cartIt">
                                <img className="carImg" src={feat3} alt=""></img>
                                <div className="cartD">
                                    <button className="cartB"><img src={cart} alt=""></img>Add to Cart</button>
                                </div>
                            </div>
                            <h4>ELLERY X M'O CAPSULE</h4>
                            <h6>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</h6>
                            <h5>$52.00</h5>
                        </div>
                        <div className="featIt">
                            <div className="cartIt">
                                <img className="carImg" src={feat4} alt=""></img>
                                <div className="cartD">
                                    <button className="cartB"><img src={cart} alt=""></img>Add to Cart</button>
                                </div>
                            </div>
                            <h4>ELLERY X M'O CAPSULE</h4>
                            <h6>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</h6>
                            <h5>$52.00</h5>
                        </div>
                        <div className="featIt">
                            <div className="cartIt">
                                <img className="carImg" src={feat8} alt=""></img>
                                <div className="cartD">
                                    <button className="cartB"><img src={cart} alt=""></img>Add to Cart</button>
                                </div>
                            </div>
                            <h4>ELLERY X M'O CAPSULE</h4>
                            <h6>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</h6>
                            <h5>$52.00</h5>
                        </div>
                        <div className="featIt">
                            <div className="cartIt">
                                <img className="carImg" src={feat9} alt=""></img>
                                <div className="cartD">
                                    <button className="cartB"><img src={cart} alt=""></img>Add to Cart</button>
                                </div>
                            </div>
                            <h4>ELLERY X M'O CAPSULE</h4>
                            <h6>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</h6>
                            <h5>$52.00</h5>
                        </div>
                        <div className="featIt">
                            <div className="cartIt">
                                <img className="carImg" src={feat10} alt=""></img>
                                <div className="cartD">
                                    <button className="cartB"><img src={cart} alt=""></img>Add to Cart</button>
                                </div>
                            </div>
                            <h4>ELLERY X M'O CAPSULE</h4>
                            <h6>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</h6>
                            <h5>$52.00</h5>
                        </div>
                        <div className="featIt">
                            <div className="cartIt">
                                <img className="carImg" src={feat11} alt=""></img>
                                <div className="cartD">
                                    <button className="cartB"><img src={cart} alt=""></img>Add to Cart</button>
                                </div>
                            </div>
                            <h4>ELLERY X M'O CAPSULE</h4>
                            <h6>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</h6>
                            <h5>$52.00</h5>
                        </div>
                        <div className="featIt">
                            <div className="cartIt">
                                <img className="carImg" src={feat12} alt=""></img>
                                <div className="cartD">
                                    <button className="cartB"><img src={cart} alt=""></img>Add to Cart</button>
                                </div>
                            </div>
                            <h4>ELLERY X M'O CAPSULE</h4>
                            <h6>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</h6>
                            <h5>$52.00</h5>
                        </div>

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