import React from "react";
import '../App.css';
import he1 from "./img/he1.png";
import he2 from "./img/he2.svg";
import he3 from "./img/he3.svg";
import he4 from "./img/he4.svg";
import he5 from "./img/he5.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <header className="top">
                <nav className="container header">
                    <div className="headerL">
                        <Link to="/"><img src={he1} alt=""></img></Link>
                        <button><img src={he2} alt=""></img></button>
                    </div>
                    <div className="headerR">
                        <button className="burg"><img src={he3} alt=""></img></button>
                        <Link to="/registration"><img src={he4} alt=""></img></Link>
                        <Link to="/cart"><img src={he5} alLt=""></img></Link>
                    </div>
                </nav>

            </header>
            <div className="brand">
                <div className="drop dropH">
                    <h5>MENU</h5>
                    <h6>MAN</h6>
                    <a href="">Accessories</a>
                    <a href="">Bags</a>
                    <a href="">Denim</a>
                    <a href="">T-Shirts</a>
                    <h6>WOMAN</h6>
                    <a href="">Accessories</a>
                    <a href="">Jackets & Coats</a>
                    <a href="">Polos</a>
                    <a href="">T-Shirts</a>
                    <a href="">Shirts</a>
                    <h6>KIDS</h6>
                    <a href="">Accessories</a>
                    <a href="">Jackets & Coats</a>
                    <a href="">Polos</a>
                    <a href="">T-Shirts</a>
                    <a href="">Shirts</a>
                    <a href="">Bags</a>
                </div>
            </div>
        </div>
    );
}