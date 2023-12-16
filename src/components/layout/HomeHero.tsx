import ProductDesc from "@/components/common/ProductDesc";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import productData from "../../../public/data.json";

const HomeHero = () => {
	return (
		<div className='hero bg-blackBg relative z-10  md:h-auto'>
			<div className='container flex justify-between py-8 flex-col md:flex-row items-center'>
				<div className='z-10 absolute md:static inset-0 top-[45%] sm:top-1/2 -translate-y-1/2 md:translate-y-0'>
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
						category={productData[3].category}
					/>
				</div>

				<ResponsiveImage
					images={{
						mobile: "/assets/home/mobile/Bitmap.png",
						tablet: "/assets/home/tablet/Bitmap.png",
						desktop: "/assets/home/desktop/Bitmap.png",
					}}
					altText={""}
					width={500}
					height={500}
					pictureClassName={"rounded-lg md:order-2"}
					imgClassName={""}
				/>
			</div>
		</div>
	);
};
export default HomeHero;
