import ProductDesc from "@/components/common/ProductDesc";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import productData from "../../../public/data.json";

const HomeHero = () => {
	return (
		<div className='hero bg-blackBg relative z-10'>
			<div className='container'>
				<div className='relative z-10'>
					<ProductDesc
						name={productData[3].name}
						description='Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.'
						slug={productData[3].slug}
						url={`/category/${productData[3].category}/product/${productData[3].slug}`}
						thumbnail={productData[3].image.mobile}
						location='home'
						isNew={productData[3].new}
						price={30}
					/>
				</div>

				<ResponsiveImage
					images={{
						mobile: "/assets/home/mobile/image-hero.jpg",
						tablet: "/assets/home/tablet/image-hero.jpg",
						desktop: "/assets/home/desktop/image-hero.jpg",
					}}
					altText={""}
					width={600}
					height={600}
					pictureClassName={
						"rounded-lg md:order-2 absolute inset-0 -top-28 -z-10 max-w-[1440px] mx-auto"
					}
					imgClassName={"w-full rounded-lg h-full"}
				/>
			</div>
		</div>
	);
};
export default HomeHero;
