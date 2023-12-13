import ResponsiveImage from "@/components/common/ResponsiveImage";
import ProductDesc from "@/components/common/ProductDesc";
import { ProductImageType } from "@/redux/CartProductProp";

const Main = ({
	name,
	description,
	slug,
	url,
	image,
	isNew,
	price,
	category,
}: {
	name: string;
	description: string;
	slug: string;
	url: string;
	image: ProductImageType;
	isNew: boolean;
	price: number;
	category: string;
}) => {
	return (
		<section
			className={`container block__padding grid items-center gap-10 text-center md:grid-cols-2 lg:gap-36 md:text-start`}
		>
			<div className={`order-1`}>
				<ProductDesc
					name={name}
					description={description}
					slug={slug}
					url={url}
					thumbnail={image.mobile}
					location='product'
					isNew={isNew}
					price={price}
					category={category}
				/>
			</div>
			<ResponsiveImage
				images={image}
				altText={""}
				width={540}
				height={580}
				pictureClassName={"rounded-lg h-full"}
				imgClassName={"w-full rounded-lg h-full max-h-[500px] object-cover"}
			/>
		</section>
	);
};
export default Main;
