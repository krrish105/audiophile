import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "@/redux/CartProductProp";

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
				let IsProductPresent = state.cart.filter(
					(el, i) => el.slug === action.payload.slug
				);
				if (IsProductPresent.length > 0) {
					let cartCopy = [...state.cart];
					state.cart = cartCopy.map((el) => {
						el.quantity = el.quantity + action.payload.quantity;
						return el;
					});
				} else {
					state.cart = [...state.cart, action.payload];
				}
			}
			let total = 0;
			state.cart.forEach(
				(product) => (total += product.price * product.quantity)
			);
			state.priceSummary.total = total;
		},
		updateCart: (state, action) => {
			let cartCopy = [...state.cart];
			if (action.payload.quantity === 0) {
				state.cart = cartCopy.filter((el) => el.slug !== action.payload.slug);
			} else {
				let cartCopy = [...state.cart];
				state.cart = cartCopy.map((el) => {
					el.quantity = action.payload.quantity;
					return el;
				});
			}
			let total = 0;
			state.cart.forEach(
				(product) => (total += product.price * product.quantity)
			);
			state.priceSummary.total = total;
		},
		removeAllFromCart: (state, action) => {
			state.cart = [];
			state.priceSummary.total = 0;
			state.priceSummary.shipping = 0;
			state.priceSummary.vat = 0;
			state.priceSummary.grandTotal = 0;
		},
	},
});

export const { addToCart, updateCart, removeAllFromCart } = cart.actions;
export default cart.reducer;
