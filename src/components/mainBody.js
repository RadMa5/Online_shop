import React from "react";
import brand from "./img/brand.png";
import as1 from "./img/as1.svg";
import as2 from "./img/as2.svg";
import as3 from "./img/as3.svg";
import ItemList from "./ItemList";

export default function MainBody() {
    return (
        <div>
            <div className="brand">

                <img className="hidePhone" src={brand} alt=""></img>
                <div className="brandR">
                    <h1>THE BRAND</h1>
                    <h2>OF LUXERIOUS <span className="accentColor">FASHION</span></h2>
                </div>
                </div>
                <div className="container spec">
                <div className="spec1">
                    <div className="darkening">
                        <div className="specText">
                            <h4>30% OFF</h4>
                            <h3>FOR WOMEN</h3>
                        </div>
                    </div>
                </div>
                <div className="spec2">
                    <div className="darkening">
                        <div className="specText">
                            <h4>HOT DEAL</h4>
                            <h3>FOR MEN</h3>
                        </div>
                    </div>
                </div>
                <div className="spec3">
                    <div className="darkening">
                        <div className="specText">
                            <h4>NEW ARRIVALS</h4>
                            <h3>FOR KIDS</h3>
                        </div>
                    </div>
                </div>
                <div className="spec4">
                    <div className="darkening darkeningBottom">
                        <div className="specText">
                            <h4>LUXIROUS & TRENDY</h4>
                            <h3>ACCESORIES</h3>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="featTitle">
                    <h1>Fetured Items</h1>
                    <h3>Shop for items based on what we featured in this week</h3>
                </div>
                    <ItemList amount={6} classStr={{className: "container featItems"}}/>
                <div className="container browseAll">
                    <a href="./catalog" className="browseAllB">Browse All Product</a>
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