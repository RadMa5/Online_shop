import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../app/components/CartReducer";
import { addReview } from "../app/CommentaryReducer";

export default function ProductDetails() {
    const [currentReview, setCurrentReview] = useState('');
    const dispatch = useDispatch();
    const params = useParams();

    const products = useSelector((state) => state.Items);
    const currentProduct = products[params.id - 1];

    const reviews = useSelector((state) => state.Reviews);

    const review = reviews[params.id - 1];

    function handleAddReview() {
        dispatch(addReview({id: params.id, text: currentReview}));
    }

    return (
        <div className="container productDetails">
            <div className="productDetailsL">
                <div>
                    <img src={currentProduct.img}></img>
                </div>
                <div className="productDetailsPurchase">
                    <h4>Buy now: </h4>
                    <button className="ProductDetailsBuy browseAllB" onClick={() => {dispatch(add(currentProduct))}}>${currentProduct.price}</button>
                </div>
            </div>
            <div className="productDetailsR">
                <h1>{currentProduct.title}</h1>
                <p>{currentProduct.desc}</p>
            </div>
            <div className="productDetailsCommentary">
                <div className="productDetailsForm">
                    <h2>Write a review:</h2>
                    <textarea onChange={(e) => {setCurrentReview(e.target.value)}}></textarea>
                    <button className="browseAllB" onClick={() => handleAddReview()}>Submit</button>
                </div>
                
                <div className="productDetailsAllReviews">
                    <h2>Current reviews:</h2>
                    {review.text.map(item => (
                        <h3>{item}</h3>
                    ))}
                </div>
            </div>
        </div>
    );
}