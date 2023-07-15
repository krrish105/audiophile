import ProductInfo from "@/components/common/ProductInfo";
import QtySelector from "@/components/formElements/QtySelector";
import Image from "next/image";
import Link from "next/link";

const CartPopup = ({
	visible,
	setVisible,
}: {
	visible: boolean;
	setVisible: any;
}) => {
	return (
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
				{Array.from({ length: 9 }).map((el, i) => {
					return <ProductInfo key={i} location='cart' />;
				})}
			</div>
			<div>
				<div className='flex justify-between mb-6'>
					<span className='uppercase text-neutral-500'>Total</span>
					<strong className='text-lg'>$ 5,396</strong>
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
	);
};
export default CartPopup;
