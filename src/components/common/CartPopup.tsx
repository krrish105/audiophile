"use client";
import ProductInfo from "@/components/common/ProductInfo";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const CartPopup = ({
	visible,
	setVisible,
}: {
	visible: boolean;
	setVisible: any;
}) => {
	const CartInititalState = useSelector((state: RootState) => state.cartSlice);

	return (
		<>
			<div className='backdrop' onClick={setVisible}></div>
			<aside
				className={`cart__popup absolute top-24 bg-white rounded-lg flex flex-col gap-8 p-8 ${
					!visible ? "hidden" : ""
				}`}
			>
				<div className='flex justify-between'>
					<strong className='text-lg uppercase'>Cart (3)</strong>
					<button className='underline text-sm btn-transparent'>
						Remove all
					</button>
				</div>
				<div className='flex flex-col gap-6'>
					{CartInititalState.cart.length > 0
						? CartInititalState.cart.map((el, i) => {
								return <ProductInfo key={i} location='cart' type='normal' />;
						  })
						: "0 Products"}
				</div>
				<div>
					<div className='flex justify-between mb-6'>
						<span className='uppercase text-neutral-500'>Total</span>
						<strong className='text-lg'>
							$ {CartInititalState.priceSummary.total}
						</strong>
					</div>
					<div className='mt-6'>
						<Link
							href='/checkout'
							className='block btn btn-orange w-full text-center'
							onClick={setVisible}
						>
							Checkout
						</Link>
					</div>
				</div>
			</aside>
		</>
	);
};
export default CartPopup;
