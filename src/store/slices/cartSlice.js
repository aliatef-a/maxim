import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    shippingAddress: null,
    paymentMethod: null,
    step: 1
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
            state.totalQuantity++;
            state.totalAmount = state.items.reduce(
                (total, item) => total + (item.price * item.quantity),
                0
            );
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            state.totalQuantity -= existingItem.quantity;
            state.items = state.items.filter(item => item.id !== id);
            state.totalAmount = state.items.reduce(
                (total, item) => total + (item.price * item.quantity),
                0
            );
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                state.totalQuantity += quantity - item.quantity;
                item.quantity = quantity;
                state.totalAmount = state.items.reduce(
                    (total, item) => total + (item.price * item.quantity),
                    0
                );
            }
        },
        setShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
        },
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        },
        setStep: (state, action) => {
            state.step = action.payload;
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    setShippingAddress,
    setPaymentMethod,
    setStep,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer; 