import React from "react";
import { createSlice } from "@reduxjs/toolkit";

let initState = {
    name: "Anonymous",
    surname: "",
    sex: "M",
    email: "",
    password: ""
};

export const CurrentUserReducer = createSlice({
    name: 'CurrentUser',
    initialState: initState,
    reducers: {
        register: (state, action) => {
            const pay = action.payload;
            console.log(pay);
            const newUser = {
                name: pay.name,
                surname: pay.surname,
                sex: pay.sex,
                email: pay.email,
                password: pay.password
            };
            return newUser;
        }
    }
});

export const { register } = CurrentUserReducer.actions;
export default CurrentUserReducer.reducer;