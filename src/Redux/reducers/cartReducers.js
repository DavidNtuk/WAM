import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const { unique_id, price, quantity, size, color } = action.payload;
            const productExists = state.products.find(p => p.unique_id === unique_id);
            if (productExists) {
                toast.info(" Increased quuantity")
                state.total -= productExists.quantity * price; 
                productExists.quantity = quantity;
                productExists.size = size;
                productExists.color = color;
                state.total += quantity * price; 
            } else {
                toast.success(`${action.payload.title} added to cart`)
                state.products = [...state.products, action.payload];
                state.total += quantity * price;
                state.quantity += 1
            }
            state.total = state.total ? state.total : state.products.reduce((a, b) => a + b.amount, 0);
            localStorage.setItem("cardItem", JSON.stringify(state.products));
        },
        removeProduct: (state, action) => {
            state.total -= state.products.find(p => p.unique_id === action.payload).amount;
            state.products = state.products.filter(p => p.unique_id !== action.payload);
            state.quantity -= 1;
            localStorage.setItem("cardItem", JSON.stringify(state.products));
        },
        reloadCartItems: (state, action) => {
            state.products = action.payload
            state.total = action.payload.reduce((a, b) => a + b.amount, 0);
            state.quantity = action.payload.length;
        },
        emptyProductCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
});

export const { addProduct, removeProduct, reloadCartItems, emptyProductCart } = cartSlice.actions;
export default cartSlice.reducer;