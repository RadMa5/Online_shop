import React from "react";

export default function Registration() {
    return (
        <div>
            <div className="container crumbs">
                <div>
                    <h2>REGISTRATION</h2>
                </div>
            </div>
            <content className="container registration">
                <div className="registrL">
                    <form action="">
                        <h3>Your Name</h3><br></br>
                        <input type="text" placeholder="First Name"></input><br></br>
                        <input type="text" placeholder="Last Name"></input><br></br>
                        <div className="gender">
                            <input type="radio" name="gender" id="male"></input>
                            <label for="male"> Male</label>
                            <input type="radio" name="gender" id="female"></input>
                            <label for="male"> Female</label>
                        </div>
                        <h3>Login details</h3><br></br>
                        <input type="email" placeholder="Email"></input><br></br>
                        <input type="password" placeholder="Password"></input><br></br>
                        <h4>Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</h4><br></br>
                        <input className="registrSub" type="submit" value="JOIN NOW"></input>
                    </form>
                </div>
                    <div className="registrR">
                        <h2>LOYALTY HAS ITS PERKS</h2>
                        <p>Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
                        <ul>
                            <li>15% off welcome offer</li>
                            <li>Free shipping, returns and exchanges on all orders</li>
                            <li>$10 off a purchase on your birthday</li>
                            <li>Early access to products</li>
                            <li>Exclusive offers & rewards</li>
                        </ul>
                    </div>
            </content>
        </div>
    );
}