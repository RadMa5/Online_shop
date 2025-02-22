import React from "react";
import feat1 from "../components/img/feat1.jpg";
import feat2 from "../components/img/feat2.png";
import feat3 from "../components/img/feat3.jpg";
import feat4 from "../components/img/feat4.png";
import feat5 from "../components/img/feat5.png";
import feat6 from "../components/img/feat6.png";
import feat7 from "../components/img/feat7.jpg";
import feat8 from "../components/img/feat8.jpg";
import feat9 from "../components/img/feat9.jpg";
import feat10 from "../components/img/feat10.jpg";
import feat11 from "../components/img/feat11.jpg";
import feat12 from "../components/img/feat12.jpg";
import { createSlice } from "@reduxjs/toolkit";

const shopItems = [{id: 1, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat1}, 
    {id: 2, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat2}, 
    {id: 3, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat3}, 
    {id: 4, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat4}, 
    {id: 5, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat5}, 
    {id: 6, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat6}, 
    {id: 7, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat7}, 
    {id: 8, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat8}, 
    {id: 9, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat9}, 
    {id: 10, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat10}, 
    {id: 11, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat11}, 
    {id: 12, title: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "$52.00", img: feat12}
];

export const ItemReducer = createSlice({
    name: 'Items',
    initialState: shopItems,
    reducers: {}
});

export default ItemReducer.reducer;