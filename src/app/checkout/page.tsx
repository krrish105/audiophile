import Form from "@/components/checkout/Form";
import Totals from "@/components/checkout/Totals";
import PriceInfo from "@/components/common/PriceInfo";
import ProductInfo from "@/components/common/ProductInfo";
import Link from "next/link";

const Checkout = () => {
	return (
		<div className='checkout bg-[#F1F1F1] pb-36'>
			<div className='container pb-6 pt-4 sm:pt-8 md:pt-20 md:pb-14'>
				<Link href='/' className='link-transparent w-fit capitalize'>
					Go Back
				</Link>
			</div>
			<form className='container grid md:grid-cols-[auto_22rem] gap-8'>
				<div className='bg-white p-6 rounded-lg md:p-12'>
					<h1 className='heading-3 mb-10'>Checkout</h1>
					<Form />
				</div>
				<div className='bg-white py-8 px-6 sm:px-8 rounded-lg sticky top-4 h-fit'>
					<h2 className='heading-6 mb-8'>Summary</h2>
					<div className='flex flex-col gap-6 max-h-60 overflow-y-auto mb-8'>
						{Array.from({ length: 9 }).map((el, i) => {
							return <ProductInfo key={i} location='checkout' />;
						})}
					</div>
					<Totals />
					<div className='mt-8'>
						<button className='btn btn-orange w-full text-center'>
							CONTINUE & PAY
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
export default Checkout;
