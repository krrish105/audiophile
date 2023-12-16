"use client";
import { useState } from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import QtySelector from "@/components/formElements/QtySelector";
import { addToCart } from "@/redux/features/cart-slice";
import { ProductType } from "@/redux/CartProductProp";

const AddToCart = ({ product }: { product: ProductType }) => {
	const [qty, setQty] = useState<number>(product.quantity);
	const dispatch = useDispatch<AppDispatch>();

	const handleSubmit = () => {
		product.quantity = qty;
		dispatch(addToCart(product));
	};

	return (
		<div className='flex gap-4 mt-12 flex-wrap'>
			<QtySelector value={qty} size='big' setQty={setQty} />
			<button className='btn btn-orange' onClick={handleSubmit}>
				Add to Cart
			</button>
		</div>
	);
};
export default AddToCart;
