import ResponsiveImage from "@/components/common/ResponsiveImage";
import Link from "next/link";

const Type3 = () => {
	return (
		<div className='flex items-center rounded-lg relative py-14 px-20 overflow-hidden mb-12 md:py-14 h-[320px]'>
			<div className='z-10'>
				<div>
					<h1 className='heading-4 mb-8 text-black'>ZX9 SPEAKER</h1>
					{/* TODO: When dynamic set condition that if description is not there then hide it */}
					{/* <p className='mb-10 text-white'>
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p> */}
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
				imgClassName={""}
				pictureClassName={"absolute inset-0 w-[1110px] h-[320px]"}
				// TODO: Will be product name
				altText=''
			/>
		</div>
	);
};
export default Type3;
