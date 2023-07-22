import ProductDesc from "@/components/common/ProductDesc";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import Image from "next/image";

const HomeHero = () => {
	return (
		<div className='hero bg-blackBg relative z-10'>
			<div className='container'>
				<div className='relative z-10'>
					<ProductDesc
						name='XX99 Mark II Headphones'
						description='Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.'
						url='/category/headphones/product/XX99 Mark II'
						location='home'
					/>
				</div>

				<ResponsiveImage
					images={[
						"/assets/home/desktop/image-hero.jpg",
						"/assets/home/tablet/image-hero.jpg",
						"/assets/home/mobile/image-hero.jpg",
					]}
					altText={""}
					width={600}
					height={600}
					pictureClassName={
						"rounded-lg md:order-2 absolute inset-0 -top-28 -z-10"
					}
					imgClassName={"w-full rounded-lg h-full"}
				/>
			</div>
		</div>
	);
};
export default HomeHero;
