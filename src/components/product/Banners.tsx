import Image from "next/image";

const Banners = () => {
	return (
		<div className='container block__padding'>
			<div className='grid sm:grid-cols-[auto_auto] sm:grid-rows-2 gap-4 md:gap-8'>
				<picture className='row-start-1'>
					<source
						media='(min-width: 480px)'
						src='/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
					/>
					<source
						media='(min-width: 768px)'
						src='/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg'
					/>
					<Image
						src='/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
						width={445}
						height={280}
						alt=''
						className='rounded-lg'
					/>
				</picture>
				<picture className='row-start-2'>
					<source
						media='(min-width: 480px)'
						src='/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
					/>
					<source
						media='(min-width: 768px)'
						src='/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg'
					/>
					<Image
						src='/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
						width={445}
						height={280}
						alt=''
						className='rounded-lg'
					/>
				</picture>
				<picture className='row-span-2'>
					<source
						media='(min-width: 480px)'
						src='/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
					/>
					<source
						media='(min-width: 768px)'
						src='/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg'
					/>
					<Image
						src='/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
						width={635}
						height={560}
						alt=''
						className='rounded-lg sm:h-full'
					/>
				</picture>
			</div>
		</div>
	);
};
export default Banners;
