"use client";
import CartPopup from "@/components/common/CartPopup";
import Image from "next/image";
import { useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Cart = () => {
	const CartInititalState = useSelector((state: RootState) => state.cartSlice);
	const [cartOpen, isCartOpen] = useState(false);

	const openCartHandler = () => {
		document
			.querySelector("body")
			?.setAttribute("data-cart-open", `${!cartOpen}`);
		isCartOpen((prev) => !prev);
	};

	return (
		<div className='cart'>
			<button onClick={openCartHandler} className='relative'>
				<Image
					src='/assets/shared/desktop/icon-cart.svg'
					width={24}
					height={20}
					alt='Open Cart'
				/>
				<span className='sr-only'>Cart</span>
				{CartInititalState.cart.length > 0 && (
					<div className='absolute bg-white w-4 h-4 rounded-full flex justify-center items-center right-[-8px] top-[-8px] text-xs font-bold'>
						<span>{CartInititalState.cart.length}</span>
					</div>
				)}
			</button>
			{cartOpen && (
				<CartPopup visible={cartOpen} setVisible={openCartHandler} />
			)}
		</div>
	);
};
export default Cart;
