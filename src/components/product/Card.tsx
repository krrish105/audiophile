import Image from "next/image";
import Link from "next/link";

const Card = () => {
	return (
		<div className='text-center'>
			<picture>
				<source
					media='(min-width: 768px)'
					srcSet='/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
				/>
				<source
					media='(min-width: 480px)'
					srcSet='/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg'
				/>
				<source
					media='(min-width: 1px)'
					srcSet='/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
				/>
				<Image
					src='/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
					width={350}
					height={318}
					alt=''
					className='rounded-lg w-full sm:w-auto'
				/>
			</picture>
			<strong className='block my-8 sm:mt-10 sm:mb-8'>XX99 MARK I</strong>
			<Link href='/' className='btn btn-orange'>
				See Product
			</Link>
		</div>
	);
};
export default Card;
