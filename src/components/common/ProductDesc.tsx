import Link from "next/link";

const ProductDesc = ({
	name,
	description,
	url,
}: {
	name: string;
	description: string;
	url: string;
}) => {
	return (
		<div className='product__desc text-center flex flex-col px-8 relative z-10 md:text-start md:max-w-sm md:px-0'>
			<span className='text-[#D87D4A]'>NEW PRODUCT</span>
			<h2 className='mt-6 heading-1'>{name}</h2>
			<p className='mt-6 text-neutral-500'>{description}</p>
			<Link href={url} className='btn btn-orange w-fit mt-10 mx-auto md:mx-0'>
				See Product
			</Link>
		</div>
	);
};
export default ProductDesc;
