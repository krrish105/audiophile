import QtySelector from "@/components/formElements/QtySelector";
import Image from "next/image";
import Link from "next/link";

const CartPopup = ({ visible }: { visible: boolean }) => {
	return (
		<aside
			className={`cart__popup absolute top-24 bg-white rounded-lg flex flex-col gap-8 p-8 ${
				!visible ? "hidden" : ""
			}`}
		>
			<div className='flex justify-between'>
				<strong className='text-lg uppercase'>Cart (3)</strong>
				<button className='underline font-medium text-neutral-500 text-sm'>
					Remove all
				</button>
			</div>
			<div className='flex flex-col gap-6'>
				<div className='flex'>
					{/* Product Info */}
					{/* Product Image */}
					<Image
						src='/assets/product-yx1-earphones/mobile/image-product.jpg'
						width={64}
						height={64}
						alt=''
						className='rounded-lg mr-4'
					/>
					<div className='flex justify-between gap-4 w-full flex-col sm:flex-row sm:items-center'>
						<div className='flex flex-col'>
							<Link href='/'>
								<strong>XX99 MK II</strong>
							</Link>
							<span className='text-neutral-500 text-sm'>$2,999</span>
						</div>
						<QtySelector size='small' />
					</div>
				</div>
				<div className='flex'>
					{/* Product Info */}
					{/* Product Image */}
					<Image
						src='/assets/product-yx1-earphones/mobile/image-product.jpg'
						width={64}
						height={64}
						alt=''
						className='rounded-lg mr-4'
					/>
					<div className='flex justify-between gap-4 w-full flex-col sm:flex-row sm:items-center'>
						<div className='flex flex-col'>
							<Link href='/'>
								<strong>XX99 MK II</strong>
							</Link>
							<span className='text-neutral-500 text-sm'>$2,999</span>
						</div>
						<QtySelector size='small' />
					</div>
				</div>
				<div className='flex'>
					{/* Product Info */}
					{/* Product Image */}
					<Image
						src='/assets/product-yx1-earphones/mobile/image-product.jpg'
						width={64}
						height={64}
						alt=''
						className='rounded-lg mr-4'
					/>
					<div className='flex justify-between gap-4 w-full flex-col sm:flex-row sm:items-center'>
						<div className='flex flex-col'>
							<Link href='/'>
								<strong>XX99 MK II</strong>
							</Link>
							<span className='text-neutral-500 text-sm'>$2,999</span>
						</div>
						<QtySelector size='small' />
					</div>
				</div>
				<div className='flex'>
					<Image
						src='/assets/product-yx1-earphones/mobile/image-product.jpg'
						width={64}
						height={64}
						alt=''
						className='rounded-lg mr-4'
					/>
					<div className='flex justify-between gap-4 w-full flex-col sm:flex-row sm:items-center'>
						<div className='flex flex-col'>
							<Link href='/'>
								<strong>XX99 MK II</strong>
							</Link>
							<span className='text-neutral-500 text-sm'>$2,999</span>
						</div>
						<QtySelector size='small' />
					</div>
				</div>
			</div>
			<div>
				<div className='flex justify-between mb-6'>
					<span className='uppercase text-neutral-500'>Total</span>
					<strong className='text-lg'>$ 5,396</strong>
				</div>
				<div>
					<button className='btn btn-orange w-full'>Checkout</button>
				</div>
			</div>
		</aside>
	);
};
export default CartPopup;
