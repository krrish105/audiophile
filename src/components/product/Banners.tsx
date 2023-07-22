import ResponsiveImage from "@/components/common/ResponsiveImage";
import Image from "next/image";

const Banners = () => {
	return (
		<div className='container block__padding'>
			<div className='grid sm:grid-cols-[auto_auto] sm:grid-rows-2 gap-4 md:gap-8'>
				<ResponsiveImage
					images={[
						"/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
						"/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg",
						"/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg",
					]}
					altText={""}
					width={445}
					height={280}
					pictureClassName={"row-start-1"}
					imgClassName={"rounded-lg"}
				/>
				<ResponsiveImage
					images={[
						"/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
						"/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg",
						"/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg",
					]}
					altText={""}
					width={445}
					height={280}
					pictureClassName={"row-start-2"}
					imgClassName={"rounded-lg"}
				/>
				<ResponsiveImage
					images={[
						"/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
						"/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg",
						"/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg",
					]}
					altText={""}
					width={635}
					height={560}
					pictureClassName={"row-span-2"}
					imgClassName={"rounded-lg sm:h-full"}
				/>
			</div>
		</div>
	);
};
export default Banners;
