import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../app/CurrentUserReducer";

export default function Registration() {
    const user = useSelector((state) => state.CurrentUser);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [sex, setSex] = useState("M");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleSurName = (e) => {
        setSurname(e.target.value);
        setSubmitted(false);
    };

    const handleSex = (e) => {
        setSex(e.target.value);
        setSubmitted(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        console.log("Submit clicked");
        e.preventDefault();
        if (name === "" || surname === "" || email === "" || password === "" || sex === "") {
            setError(true);
        } else {
            const newUser = {
                name: name,
                surname: surname,
                sex: sex,
                email: email,
                password: password
            };
            dispatch(register(newUser));
            setSubmitted(true);
            setError(false);
        }
    };

    const SuccessMessage = () => {
        return (
            <div
                className="success registration"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h2>User {name} {surname} has successfully logged in</h2>
            </div>
        );
    };

    const ErrorMessage = () => {
        return (
            <div
                className="error registration"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h2>Not all text fields are filled</h2>
            </div>
        );
    };
    return (
        <div>
            <div className="container crumbs">
                <div>
                    <h2>REGISTRATION</h2>
                </div>
            </div>
            <div className="container registration">
                <div className="registrL">
                    <form action="" style={{
                        display: submitted ? "none" : "",
                    }}>
                        <h3>Your Name</h3><br></br>
                        <input type="text" placeholder="First Name" onChange={handleName}></input><br></br>
                        <input type="text" placeholder="Last Name" onChange={handleSurName}></input><br></br>
                        <div className="gender">
                            <input type="radio" name="gender" id="male" defaultChecked={true} value={"M"} onChange={handleSex}></input>
                            <label id="male"> Male</label>
                            <input type="radio" name="gender" id="female" value={"F"} onChange={handleSex}></input>
                            <label id="male"> Female</label>
                        </div>
                        <h3>Login details</h3><br></br>
                        <input type="email" placeholder="Email" onChange={handleEmail}></input><br></br>
                        <input type="password" placeholder="Password" onChange={handlePassword}></input><br></br>
                        <h4>Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</h4><br></br>
                        <input className="registrSub" type="submit" value="JOIN NOW" onClick={handleSubmit}></input>
                    </form>
                    <SuccessMessage />
                    <ErrorMessage />
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
            </div>
        </div>
    );
}