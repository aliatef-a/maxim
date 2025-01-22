import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentStep: 1,
    steps: [
        { id: 1, title: "السلة" },
        { id: 2, title: "معلومات الشحن" },
        { id: 3, title: "الدفع" },
        { id: 4, title: "تقييم المنتج" }
    ],
    isOrderSuccess: false,
    paymentStep: 'details', // details, shipping, confirmation
    isAuth: false
};

const cartProgressSlice = createSlice({
    name: 'cartProgress',
    initialState,
    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        nextStep: (state) => {
            if (state.currentStep < state.steps.length) {
                state.currentStep += 1;
            }
        },
        previousStep: (state) => {
            if (state.currentStep > 1) {
                state.currentStep -= 1;
            }
        },
        setOrderSuccess: (state, action) => {
            state.isOrderSuccess = action.payload;
        },
        setPaymentStep: (state, action) => {
            state.paymentStep = action.payload;
        },
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        }
    }
});

export const {
    currentStep,
    setCurrentStep,
    nextStep,
    previousStep,
    setOrderSuccess,
    resetProgress,
    setPaymentStep,
    setAuth
} = cartProgressSlice.actions;

export default cartProgressSlice.reducer;
