import { createSlice } from "@reduxjs/toolkit";
import ProductType from "@/redux/CartProductProp";

type ProductState = {
	cart: ProductType[];
	priceSummary: {
		total: number;
		shipping: number;
		vat: number;
		grandTotal: number;
	};
};

const initialState: ProductState = {
	cart: [],
	priceSummary: {
		total: 0,
		shipping: 0,
		vat: 0,
		grandTotal: 0,
	},
};

export const cart = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			if (action.payload.quantity > 0) {
				state.cart = [...state.cart, action.payload];
			}
			let total = 0;
			state.cart.forEach((product) => (total += product.price));
			state.priceSummary.total = total;
		},
	},
});

export const { addToCart } = cart.actions;
export default cart.reducer;
