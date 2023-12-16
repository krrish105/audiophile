import ResponsiveImage from "@/components/common/ResponsiveImage";
import Link from "next/link";

const Type3 = () => {
	return (
		<div className='flex items-center rounded-lg relative py-14 px-20 overflow-hidden mb-12 md:py-14 h-[320px]'>
			<div className='z-10'>
				<div>
					<h1 className='heading-4 mb-8 text-black'>ZX9 SPEAKER</h1>
					<Link href='/' className='btn btn-white block w-fit'>
						See Product
					</Link>
				</div>
			</div>
			<ResponsiveImage
				images={{
					mobile: "/assets/home/mobile/image-speaker-zx7.jpg",
					tablet: "/assets/home/tablet/image-speaker-zx7.jpg",
					desktop: "/assets/home/desktop/image-speaker-zx7.jpg",
				}}
				width={1110}
				height={320}
				imgClassName={"h-full"}
				pictureClassName={"absolute inset-0 lg:w-[1110px] h-[320px]"}
				altText='ZX9 SPEAKER'
			/>
		</div>
	);
};
export default Type3;
