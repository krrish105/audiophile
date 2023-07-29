import Image from "next/image";
import Link from "next/link";
import QtySelector from "@/components/formElements/QtySelector";

const ProductInfo = ({
	location,
	type,
}: {
	location: string;
	type: string;
}) => {
	return (
		<div className='flex'>
			{/* Product Info */}
			<Image
				src='/assets/product-yx1-earphones/mobile/image-product.jpg'
				width={type === "small" ? 50 : 64}
				height={type === "small" ? 50 : 64}
				alt=''
				className={`rounded-lg ${type === "small" ? "mr-2" : "mr-4"}`}
			/>
			<div
				className={`flex justify-between gap-4 w-full ${
					type !== "small" ? "sm:items-center" : ""
				} ${location === "checkout" ? "flex-row" : "flex-col sm:flex-row"}`}
			>
				<div className='flex flex-col'>
					<Link href='/'>
						<strong>XX99 MK II</strong>
					</Link>
					<span className='text-neutral-500 text-sm'>$2,999</span>
				</div>
				{location === "checkout" ? (
					<strong className='block text-neutral-500'>1x</strong>
				) : (
					location !== "dashboard" && <QtySelector size='small' value={1} />
				)}
			</div>
		</div>
	);
};
export default ProductInfo;
