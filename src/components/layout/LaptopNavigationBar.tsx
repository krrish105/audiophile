import Link from "next/link";

const LaptopNavigationBar = () => {
	return (
		<ul className='laptop__nav inline-flex gap-8 flex-col sm:flex-row items-center'>
			<li>
				<Link href='/' className='text-white'>
					Home
				</Link>
			</li>
			<li>
				<Link href='/category/headphones' className='text-white'>
					Headphones
				</Link>
			</li>
			<li>
				<Link href='/category/speakers' className='text-white'>
					Speakers
				</Link>
			</li>
			<li>
				<Link href='/category/earphones' className='text-white'>
					Earphones
				</Link>
			</li>
		</ul>
	);
};
export default LaptopNavigationBar;
