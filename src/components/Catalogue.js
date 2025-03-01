import React, { useState } from "react";
import fil1 from "./img/fil1.svg";
import fil2 from "./img/fil2.svg";
import arrowL from "./img/arrowL.svg";
import arrowR from "./img/arrowR.svg";
import as1 from "./img/as1.svg";
import as2 from "./img/as2.svg";
import as3 from "./img/as3.svg";
import { useDispatch, useSelector } from "react-redux";
import { sizeFilter } from "../app/ItemReducer";
import ItemList from "./ItemList";


function toggleSize() {
    const menuSize = document.querySelector('.size');
    menuSize.classList.toggle('sizeH');
}

function toggleFil() {
    const menuF = document.querySelector('.filterDD');
    menuF.classList.toggle('dropF');
}

export default function Catalogue() {
    
    const [sizeFilters, setSizeFilters] = useState(["S", "M", "L", "XL"]);

    const dispatch = useDispatch();

    function sizeUpdate(size) {
        const sizeIsInFilter = sizeFilters.includes(size);
        if (sizeIsInFilter){
            const index = sizeFilters.indexOf(size);
            const newArr = sizeFilters;
            newArr.splice(index, 1);
            setSizeFilters(newArr);
        } else {
            const newArr2 = sizeFilters;
            newArr2.push(size);
            setSizeFilters(newArr2);
        }
        dispatch(sizeFilter(sizeFilters));
    }
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
                    
                    <div>
                        <div className="catFilters">
                            <button className="filter" onClick={() => {toggleFil()}}><span className="filH">FILTER </span><img src={fil1} alt=""></img></button>
                            <button className="greyColor">TRENDING NOW <img src={fil2} alt=""></img></button>
                            <button className="sizeB greyColor" onClick={() => {toggleSize()}}>SIZE <img src={fil2} alt=""></img></button>
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
                                <input type="checkbox" name="S" value="S" defaultChecked={true} onChange={(e) => {sizeUpdate(e.target.value)}}></input>
                                <label name="S">S</label><br></br>
                                <input type="checkbox" name="M" value="M" defaultChecked={true} onChange={(e) => {sizeUpdate(e.target.value)}}></input>
                                <label name="M">M</label><br></br>
                                <input type="checkbox" name="L" value="L" defaultChecked={true} onChange={(e) => {sizeUpdate(e.target.value)}}></input>
                                <label name="L">L</label><br></br>
                                <input type="checkbox" name="XL" value="XL" defaultChecked={true} onChange={(e) => {sizeUpdate(e.target.value)}}></input>
                                <label name="XL">XL</label>
                            </form>
                        </div>
                        <ItemList amount={9} classStr={{className: "catContent"}} filter={sizeFilters}/>
                        <div className="catPager">
                            <img src={arrowL} alt=""></img>
                            <p><span className="accentColor">1</span> 2 3 4 5 6.....20 </p> <img src={arrowR} alt=""></img>
                        </div>
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