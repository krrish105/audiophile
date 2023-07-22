import Link from "next/link";
import MobileNavigationBar from "@/components/layout/MobileNavigationBar";
import BestAudioGear from "@/components/common/BestAudioGear";
import ProductDesc from "@/components/common/ProductDesc";
import Description from "@/components/product/Description";
import Main from "@/components/product/Main";
import Banners from "@/components/product/Banners";
import Recommendation from "@/components/product/Recommendation";

const Product = ({ params }: { params: { productName: string } }) => {
	return (
		<>
			<div className='container mb-6 mt-4 sm:mt-8 md:mt-20 md:mb-14'>
				<Link href='/' className='link-transparent w-fit capitalize'>
					Go Back
				</Link>
			</div>

			<Main
				image={[
					"/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
				]}
			>
				<ProductDesc
					name='XX99 Mark II Headphones'
					description='Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.'
					url='/category/headphones/product/XX99 Mark II'
					location='product'
				/>
			</Main>
			<Description />
			<Banners />
			<Recommendation />

			<section>
				<MobileNavigationBar />
			</section>
			<BestAudioGear />
		</>
	);
};
export default Product;
