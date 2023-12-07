import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux/features/cart-slice";

export const store = configureStore({
	reducer: {
		cartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
