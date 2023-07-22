import ResponsiveImage from "@/components/common/ResponsiveImage";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
	return (
		<div className='text-center'>
			<ResponsiveImage
				images={[
					"/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
				]}
				altText={""}
				width={350}
				height={318}
				pictureClassName={""}
				imgClassName={"rounded-lg w-full sm:w-auto"}
			/>
			<strong className='block my-8 sm:mt-10 sm:mb-8'>XX99 MARK I</strong>
			<Link href='/' className='btn btn-orange'>
				See Product
			</Link>
		</div>
	);
};
export default Card;
