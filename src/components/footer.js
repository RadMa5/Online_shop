import React from "react";
import foot1 from "./img/foot1.png";
import foot2 from "./img/foot2.svg";
import foot3 from "./img/foot3.svg";
import foot4 from "./img/foot4.svg";
import foot5 from "./img/foot5.svg";

export default function Footer() {
    return (
        <footer>
        <div className="mail">
            <div className="container darkeningM">
                <div className="mailL">
                    <img src={foot1} alt=""></img>
                    <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span className="italic">a pulvinar purus condimentum“</span></p>
                </div>
                <div className="mailR">
                    <h3>SUBSCRIBE</h3>
                    <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
                    <form className="form">
                        <input type="email" name="mail" className="formL" placeholder="Enter Your Email"></input>
                        <input type="submit" name="Subscribe" className="formR" value="Subscribe"></input>
                    </form>
                </div>
            </div>
        </div>
        <div className="container bottom">
            <div className="bottomL">
                <p>© 2022 Brand All Rights Reserved.</p>
            </div>
            <div className="bottomR">
                <img className="footLink" src={foot2} alt=""></img><img className="footLink" src={foot3} alt=""></img><img className="footLink" src={foot4} alt=""></img><img className="footLink" src={foot5} alt=""></img>
            </div>
        </div>
    </footer>
    );
}