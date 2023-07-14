import Image from "next/image";
import Link from "next/link";

const LogoLink = () => {
	return (
		<div className='logo'>
			<Link href='/'>
				<Image
					src='/assets/shared/desktop/logo.svg'
					width={144}
					height={24}
					alt='AudioPhile Logo'
				/>
			</Link>
		</div>
	);
};
export default LogoLink;
