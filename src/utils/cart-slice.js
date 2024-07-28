import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    //reducers never return anything
    reducers:{
        addItem: (state, action) => {
            state.items.push(action);
        },
        clearCart: (state) => {
            state.items = [];
        },
        removeItem: (state) => {
            state.items.pop();
        }

    },
});

export const {addItem, clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;