import ResponsiveImage from "@/components/common/ResponsiveImage";
import Link from "next/link";

const Type3 = () => {
	return (
		<div className='relative overflow-hidden mb-12'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<ResponsiveImage
					images={{
						mobile: "/assets/home/mobile/image-earphones-yx1.jpg",
						tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
						desktop: "/assets/home/desktop/image-earphones-yx1.jpg",
					}}
					width={540}
					height={320}
					imgClassName={"rounded-lg w-full md:w-auto"}
					pictureClassName={"rounded-lg w-full md:w-auto"}
					// TODO: Will be product name
					altText=''
				/>
				<div className='rounded-lg z-10 bg-primaryGrey flex justify-center items-center min-h-[240px]'>
					<div>
						<h1 className='heading-4 mb-8 text-black'>YX1 Earphones</h1>
						{/* TODO: When dynamic set condition that if description is not there then hide it */}
						{/* <p className='mb-10 text-white'>
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p> */}
						<Link href='/' className='btn btn-white w-fit'>
							See Product
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Type3;
