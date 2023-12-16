"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductType } from "@/redux/CartProductProp";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { updateCart } from "@/redux/features/cart-slice";
import QtySelector from "@/components/formElements/QtySelector";

const ProductInfo = ({
	location,
	type,
	product,
}: {
	location: string;
	type: string;
	product: ProductType;
}) => {
	const [qty, setQty] = useState<number>(product.quantity);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (product && product.quantity !== qty) {
			product.quantity = qty;
			dispatch(updateCart(product));
		}
	}, [qty]);

	return (
		<div className='flex'>
			{/* Product Info */}
			<Image
				src={product.thumbnail}
				width={type === "small" ? 50 : 64}
				height={type === "small" ? 50 : 64}
				alt={product.name}
				className={`rounded-lg ${type === "small" ? "mr-2" : "mr-4"}`}
			/>
			<div
				className={`flex justify-between gap-4 w-full ${
					type !== "small" ? "sm:items-center" : ""
				} ${location === "checkout" ? "flex-row" : "flex-col sm:flex-row"}`}
			>
				<div className='flex flex-col'>
					<Link href={`/category/${product.category}/product/${product.slug}`}>
						<strong>{product.name}</strong>
					</Link>
					<span className='text-neutral-500 text-sm'>${product.price}</span>
				</div>
				{location === "checkout" ? (
					<strong className='block text-neutral-500'>
						{product.quantity}x
					</strong>
				) : (
					<QtySelector size='small' value={qty} setQty={setQty} />
				)}
			</div>
		</div>
	);
};
export default ProductInfo;
