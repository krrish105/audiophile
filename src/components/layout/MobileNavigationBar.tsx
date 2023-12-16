import Image from "next/image";
import Link from "next/link";

const MobileNavigationBar = () => {
	return (
		<ul className='mobile__nav flex flex-col gap-8 bg-white px-4 pb-6 container sm:flex-row sm:gap-2 xl:px-0 '>
			<li className='text-center bg-primaryGrey rounded-lg p-4 pb-5 w-full mt-8 flex flex-col justify-between'>
				<Image
					src='/assets/shared/desktop/image-category-thumbnail-headphones.png'
					width={80}
					height={100}
					alt=''
					className='-mt-14 mx-auto h-32 w-auto'
				/>
				<div>
					<span className='font-bold uppercase'>Headphones</span>
					<Link
						href='/category/headphones'
						className='mt-3 btn-transparent uppercase w-fit mx-auto'
					>
						Shop
						<span></span>
					</Link>
				</div>
			</li>
			<li className='text-center bg-primaryGrey rounded-lg p-4 pb-5 w-full mt-8 flex flex-col justify-between'>
				<Image
					src='/assets/shared/desktop/image-category-thumbnail-earphones.png'
					width={80}
					height={100}
					alt=''
					className='-mt-14 mx-auto h-32 w-auto'
				/>
				<div>
					<span className='font-bold uppercase'>Speakers</span>
					<Link
						href='/category/speakers'
						className='mt-3 btn-transparent uppercase w-fit mx-auto'
					>
						Shop
						<span></span>
					</Link>
				</div>
			</li>
			<li className='text-center bg-primaryGrey rounded-lg p-4 pb-5 w-full mt-8 flex flex-col justify-between'>
				<Image
					src='/assets/shared/desktop/image-category-thumbnail-speakers.png'
					width={80}
					height={100}
					alt=''
					className='-mt-14 mx-auto h-32 w-auto'
				/>
				<div>
					<span className='font-bold uppercase'>Earphones</span>
					<Link
						href='/category/earphones'
						className='mt-3 btn-transparent uppercase w-fit mx-auto'
					>
						Shop
						<span></span>
					</Link>
				</div>
			</li>
		</ul>
	);
};
export default MobileNavigationBar;
