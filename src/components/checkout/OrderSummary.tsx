"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProductInfo from "@/components/common/ProductInfo";
import Totals from "@/components/checkout/Totals";

const OrderSummary = () => {
	const CartInititalState = useSelector((state: RootState) => state.cartSlice);

	return (
		<div className='bg-white py-8 px-6 sm:px-8 rounded-lg sticky top-4 h-fit'>
			<h2 className='heading-6 mb-8'>Summary</h2>
			<div className='flex flex-col gap-6 max-h-60 overflow-y-auto mb-8'>
				{CartInititalState.cart.map((el, i) => {
					return (
						<ProductInfo
							key={i}
							location='checkout'
							type='normal'
							product={{ ...el }}
						/>
					);
				})}
			</div>
			<Totals priceSummary={CartInititalState.priceSummary} />
			<div className='mt-8'>
				<button className='btn btn-orange w-full text-center'>
					CONTINUE & PAY
				</button>
			</div>
		</div>
	);
};
export default OrderSummary;
