"use client";
import CartPopup from "@/components/common/CartPopup";
import Image from "next/image";
import { useState } from "react";

const Cart = () => {
	const [cartOpen, isCartOpen] = useState(false);

	const openCartHandler = () => {
		document
			.querySelector("body")
			?.setAttribute("data-cart-open", `${!cartOpen}`);
		isCartOpen((prev) => !prev);
	};

	return (
		<div className='cart'>
			<button onClick={openCartHandler}>
				<Image
					src='/assets/shared/desktop/icon-cart.svg'
					width={24}
					height={20}
					alt='AudioPhile Logo'
				/>
			</button>
			{cartOpen && (
				<CartPopup visible={cartOpen} setVisible={openCartHandler} />
			)}
		</div>
	);
};
export default Cart;
