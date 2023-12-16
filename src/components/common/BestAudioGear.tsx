import TextImage from "@/components/common/TextImage";

const BestAudioGear = () => {
	return (
		<TextImage
			image={{
				mobile: "/assets/shared/mobile/image-best-gear.jpg",
				tablet: "/assets/shared/tablet/image-best-gear.jpg",
				desktop: "/assets/shared/desktop/image-best-gear.jpg",
			}}
			imageDirection='right'
		>
			<div className='py-4'>
				<h2 className='mb-8 heading-2'>
					Bringing you the <span className='text-primaryOrange'>best</span>{" "}
					audio gear
				</h2>
				<p className='text-neutral-500'>
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
		</TextImage>
	);
};
export default BestAudioGear;
