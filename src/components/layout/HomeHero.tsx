import ProductDesc from "@/components/common/ProductDesc";
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
					/>
				</div>

				<picture className='rounded-lg md:order-2 absolute inset-0 -top-28 -z-10'>
					<source
						media='(min-width: 768px)'
						srcSet='/assets/home/desktop/image-hero.jpg'
					/>
					<source
						media='(min-width: 480px)'
						srcSet='/assets/home/tablet/image-hero.jpg'
					/>
					<source
						media='(min-width: 1px)'
						srcSet='/assets/home/mobile/image-hero.jpg'
					/>
					<Image
						src='/assets/home/mobile/image-hero.jpg'
						width={600}
						height={600}
						alt=''
						className='w-full rounded-lg h-full'
					/>
				</picture>
			</div>
		</div>
	);
};
export default HomeHero;
