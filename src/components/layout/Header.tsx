import Cart from "@/components/common/Cart";
import LogoLink from "@/components/common/LogoLink";
import Navigation from "@/components/layout/Navigation";

const Header = ({ dashboard }: { dashboard: boolean }) => {
	return (
		<header className='bg-blackBg'>
			<div className='container relative'>
				<div>
					<LogoLink />
					{!dashboard ? (
						<>
							<Navigation />
							<Cart />
						</>
					) : (
						<>
							<div className='heading-6 h-6 bg-white w-[.2rem]'></div>
							<div className='heading-6 text-white'>Dashboard</div>
						</>
					)}
				</div>
			</div>
		</header>
	);
};
export default Header;
