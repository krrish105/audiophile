import Cart from "@/components/common/Cart";
import LogoLink from "@/components/common/LogoLink";
import Navigation from "@/components/layout/Navigation";

const Header = () => {
	return (
		<header className='bg-blackBg'>
			<div className='container relative'>
				<div>
					<LogoLink />
					<Navigation />
					<Cart />
				</div>
			</div>
		</header>
	);
};
export default Header;
