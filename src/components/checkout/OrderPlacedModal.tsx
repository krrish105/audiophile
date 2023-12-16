"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import ProductInfo from "@/components/common/ProductInfo";
import { removeAllFromCart } from "@/redux/features/cart-slice";

const OrderPlacedModal = ({ setOrderPlaced }: any) => {
	const CartInititalState = useSelector((state: RootState) => state.cartSlice);
	const dispatch = useDispatch<AppDispatch>();
	const [showAllProducts, setShowAllProducts] = useState(false);

	return (
		<>
			<div className='backdrop' onClick={() => setOrderPlaced()}></div>
			<aside className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 sm:p-12 z-[1000] rounded-lg min-w-[300px] sm:min-w-[400px]'>
				<div>
					<Image
						src='/assets/checkout/icon-order-confirmation.svg'
						width={64}
						height={64}
						alt=''
						className='h-fit mb-8'
					/>
					<h3 className='heading-3 mb-6'>Thank you for your order</h3>
					<span className='text-neutral-500'>
						You will receive an email confirmation shortly.
					</span>
					<div className='grid mt-8 grid-rows-[auto_6rem] lg:grid-cols-[auto_12rem] lg:grid-rows-1'>
						<div className='bg-primaryGrey p-6 rounded-t-lg lg:rounded-l-lg lg:rounded-t-none'>
							<div className='max-h-44 overflow-y-auto flex flex-col gap-4'>
								<ProductInfo
									location='checkout'
									type='small'
									product={{ ...CartInititalState.cart[0] }}
								/>
								{showAllProducts &&
									CartInititalState.cart.map((el, i) => {
										if (i >= 1) {
											return (
												<ProductInfo
													key={el.name}
													location='checkout'
													type='small'
													product={{ ...el }}
												/>
											);
										}
									})}
							</div>
							{CartInititalState.cart.length > 1 && (
								<>
									<hr className='block my-3' />
									<button
										className='block mx-auto'
										onClick={() => setShowAllProducts((prev) => !prev)}
									>
										<strong className='text-neutral-500 text-xs'>
											{showAllProducts ? "View less" : "and 2 other item(s)"}
										</strong>
									</button>
								</>
							)}
						</div>
						<div
							className={`bg-black flex justify-center p-6 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none ${
								showAllProducts ? "items-end" : "items-center"
							}`}
						>
							<div className='flex flex-col gap-2'>
								<span className='text-neutral-500'>Grand Total</span>
								<span className='text-white'>
									$ {CartInititalState.priceSummary.grandTotal.toFixed(2)}
								</span>
							</div>
						</div>
					</div>
					<Link
						href='/'
						className='btn btn-orange block w-full text-center mt-12'
						onClick={() => dispatch(removeAllFromCart({ orderPlaced: true }))}
					>
						Back to home
					</Link>
				</div>
			</aside>
		</>
	);
};
export default OrderPlacedModal;
