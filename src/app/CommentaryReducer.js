import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initState = [
    { id: 1, text: ['Review for item 1!', 'Another review for one'] }, 
    { id: 2, text: ['Review for item 2!'] }, 
    { id: 3, text: ['Review for item 3!'] }, 
    { id: 4, text: [] }, 
    { id: 5, text: ['Review for item 5!'] }, 
    { id: 6, text: ['Review for item 6!'] }, 
    { id: 7, text: [] }, 
    { id: 8, text: ['Review for item 8!'] }, 
    { id: 9, text: ['Review for item 9!'] }, 
    { id: 10, text: ['Review for item 10!'] }, 
    { id: 11, text: ['Review for item 11!'] }, 
    { id: 12, text: [] }, 
];

export const CommentaryReducer = createSlice({
    name: 'Reviews',
    initialState: initState,
    reducers: {
        addReview: (state, action) => {
            let allreviews = initState;
            let allReviewsText = [...allreviews[action.payload.id - 1].text];
            allReviewsText.push(action.payload.text);
            state[action.payload.id - 1].text = allReviewsText;
        }
    }
});

export const { addReview } = CommentaryReducer.actions;
export default CommentaryReducer.reducer;