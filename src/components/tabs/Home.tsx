import ProductDesc from "@/components/common/ProductDesc";
import TextImage from "@/components/common/TextImage";

const Home = ({ visible }: { visible: boolean }) => {
	return (
		<div className={`${visible ? "block" : "hidden"}`}>
			<div className='grid md:grid-cols-3 gap-8'>
				<div className='text-center border border-gray-300 p-5 w-full'>
					<h2 className='text-lg mb-2'>Orders</h2>
					<span className='text-base'>300</span>
				</div>
				<div className='text-center border border-gray-300 p-5 w-full'>
					<h2 className='text-lg mb-2'>Sale</h2>
					<span className='text-base'>$ 300</span>
				</div>
				<div className='text-center border border-gray-300 p-5 w-full'>
					<h2 className='text-lg mb-2'>Customers</h2>
					<span className='text-base'>300</span>
				</div>
			</div>
			<div className='most__loved__product'>
				<h2 className='heading-3 my-14'>Most Loved Product</h2>
				<TextImage
					image={[
						"/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
						"/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
						"/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
					]}
					imageDirection='left'
				>
					<ProductDesc
						name='XX99 Mark II Headphones'
						description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
						url='/category/headphones/product/XX99 Mark II'
						location='category'
					/>
				</TextImage>
			</div>
		</div>
	);
};
export default Home;
