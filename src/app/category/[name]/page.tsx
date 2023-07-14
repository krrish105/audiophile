import BestAudioGear from "@/components/common/BestAudioGear";
import MobileNavigationBar from "@/components/layout/MobileNavigationBar";
import TextImage from "@/components/common/TextImage";
import ProductDesc from "@/components/common/ProductDesc";

const Category = ({ params }: { params: { name: string } }) => {
	return (
		<div className='category__page'>
			<div className='hero bg-blackBg relative'>
				<div className='container'>
					<h1 className='text-white text-center py-24 heading-2'>
						{params.name}
					</h1>
				</div>
			</div>
			<TextImage
				image={[
					"/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
				]}
				imageDirection='left'
			>
				<ProductDesc
					name='XX99 Mark II Headphones'
					description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
					url='/category/headphones/product/XX99 Mark II'
				/>
			</TextImage>
			<TextImage
				image={[
					"/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
				]}
				imageDirection='right'
			>
				<ProductDesc
					name='XX99 Mark II Headphones'
					description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
					url='/category/headphones/product/XX99 Mark II'
				/>
			</TextImage>
			<TextImage
				image={[
					"/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
					"/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
				]}
				imageDirection='left'
			>
				<ProductDesc
					name='XX99 Mark II Headphones'
					description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
					url='/category/headphones/product/XX99 Mark II'
				/>
			</TextImage>
			<section>
				<MobileNavigationBar />
			</section>

			<BestAudioGear />
		</div>
	);
};
export default Category;
