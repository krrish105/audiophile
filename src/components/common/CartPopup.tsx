"use client";
import Link from "next/link";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { removeAllFromCart } from "@/redux/features/cart-slice";
import ProductInfo from "@/components/common/ProductInfo";

const CartPopup = ({
	visible,
	setVisible,
}: {
	visible: boolean;
	setVisible: any;
}) => {
	const CartInititalState = useSelector((state: RootState) => state.cartSlice);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			<div className='backdrop' onClick={setVisible}></div>
			<aside
				className={`cart__popup absolute top-24 bg-white rounded-lg flex flex-col gap-8 p-8 ${
					!visible ? "hidden" : ""
				}`}
			>
				<div className='flex justify-between'>
					<strong className='text-lg uppercase'>
						Cart{" "}
						{CartInititalState.cart.length > 0 &&
							`(${CartInititalState.cart.length})`}
					</strong>
					<button
						className='underline text-sm btn-transparent'
						onClick={() => dispatch(removeAllFromCart({ orderPlaced: false }))}
					>
						Remove all
					</button>
				</div>
				<div className='flex flex-col gap-6'>
					{CartInititalState.cart.length > 0
						? CartInititalState.cart.map((el, i) => {
								return (
									<ProductInfo
										key={i}
										location='cart'
										type='normal'
										product={{ ...el }}
									/>
								);
						  })
						: "0 Products"}
				</div>
				<div className='flex flex-col gap-12'>
					<div className='flex justify-between'>
						<span className='uppercase text-neutral-500'>Total</span>
						<strong className='text-lg'>
							$ {CartInititalState.priceSummary.total.toFixed(2)}
						</strong>
					</div>
					{CartInititalState.cart.length > 0 && (
						<div>
							<Link
								href='/checkout'
								className='block btn btn-orange w-full text-center'
								onClick={setVisible}
							>
								Checkout
							</Link>
						</div>
					)}
				</div>
			</aside>
		</>
	);
};
export default CartPopup;
