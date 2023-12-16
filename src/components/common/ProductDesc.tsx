import Link from "next/link";
import AddToCart from "@/components/product/AddToCart";

const ProductDesc = ({
	name,
	description,
	slug,
	thumbnail,
	category,
	url,
	location,
	isNew,
	price,
}: {
	name: string;
	description: string;
	slug: string;
	url: string;
	thumbnail: string;
	category: string;
	location: string;
	isNew: boolean;
	price: number;
}) => {
	return (
		<div
			className={`product__desc flex flex-col px-0 relative z-10 md:max-w-sm md:px-0 ${
				location === "product" ? "text-start" : "text-center md:text-start"
			}`}
		>
			{isNew && <span className='text-primaryOrange'>NEW PRODUCT</span>}
			{location === "product" ? (
				<h1 className='mt-6 heading-1'>{name}</h1>
			) : (
				<h2 className='mt-6 heading-1'>{name}</h2>
			)}
			<p className='mt-6 text-neutral-400'>{description}</p>
			{location === "product" ? (
				<>
					<strong className='block mt-8 text-lg'>${price}</strong>
					<AddToCart
						product={{
							slug,
							name,
							price,
							thumbnail,
							quantity: 1,
							category,
						}}
					/>
				</>
			) : (
				<Link href={url} className='btn btn-orange w-fit mt-10 mx-auto md:mx-0'>
					See Product
				</Link>
			)}
		</div>
	);
};
export default ProductDesc;
