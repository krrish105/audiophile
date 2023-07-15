import Link from "next/link";
import QtySelector from "@/components/formElements/QtySelector";

const ProductDesc = ({
	name,
	description,
	url,
	location,
}: {
	name: string;
	description: string;
	url: string;
	location: string;
}) => {
	return (
		<div
			className={`product__desc flex flex-col px-0 relative z-10 md:max-w-sm md:px-0 ${
				location === "product" ? "text-start" : "text-center md:text-start"
			}`}
		>
			<span className='text-[#D87D4A]'>NEW PRODUCT</span>
			<h2 className='mt-6 heading-1'>{name}</h2>
			<p className='mt-6 text-neutral-400'>{description}</p>
			{location === "product" ? (
				<>
					<strong className='block mt-8 text-lg'>$ 2,999</strong>
					<div className='flex gap-4 mt-12 flex-wrap'>
						<QtySelector value={1} size='big' />
						<button className='btn btn-orange'>Add to Cart</button>
					</div>
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
