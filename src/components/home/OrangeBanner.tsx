import Image from "next/image";
import Link from "next/link";

const OrangeBanner = () => {
	return (
		<div className='rounded-lg bg-[#D87D4A] py-14 px-6 overflow-hidden mb-12 md:p-24 md:pb-0'>
			<div className='flex items-center gap-32 flex-col md:flex-row'>
				<picture>
					<source
						media='(min-width: 768px)'
						srcSet='/assets/home/desktop/image-speaker-zx9.png'
					/>
					<source
						media='(min-width: 480px)'
						srcSet='/assets/home/tablet/image-speaker-zx9.png'
					/>
					<source
						media='(min-width: 1px)'
						srcSet='/assets/home/mobile/image-speaker-zx9.png'
					/>
					<Image
						src='/assets/home/mobile/image-speaker-zx9.png'
						alt=''
						width={410}
						height={490}
						className='-mb-5'
					/>
				</picture>
				<div className='pb-14 md:pb-24 text-center md:text-start'>
					<h1 className='heading-1 mb-6 text-white'>ZX9 SPEAKER</h1>
					<p className='mb-10 text-white'>
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
					<Link href='/' className='btn btn-black'>
						See Product
					</Link>
				</div>
			</div>
		</div>
	);
};
export default OrangeBanner;
