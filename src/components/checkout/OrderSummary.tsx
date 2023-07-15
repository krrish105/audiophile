import ProductInfo from "@/components/common/ProductInfo";
import Totals from "@/components/checkout/Totals";

const OrderSummary = () => {
	return (
		<div className='bg-white py-8 px-6 sm:px-8 rounded-lg sticky top-4 h-fit'>
			<h2 className='heading-6 mb-8'>Summary</h2>
			<div className='flex flex-col gap-6 max-h-60 overflow-y-auto mb-8'>
				{Array.from({ length: 9 }).map((el, i) => {
					return <ProductInfo key={i} location='checkout' type='normal' />;
				})}
			</div>
			<Totals />
			<div className='mt-8'>
				<button className='btn btn-orange w-full text-center'>
					CONTINUE & PAY
				</button>
			</div>
		</div>
	);
};
export default OrderSummary;
