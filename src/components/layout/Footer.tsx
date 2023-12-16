import LogoLink from "@/components/common/LogoLink";
import LaptopNavigationBar from "@/components/layout/LaptopNavigationBar";
import Image from "next/image";

const Footer = ({ dashboard }: { dashboard: boolean }) => {
	return (
		<footer className='bg-primaryBlack'>
			<div className='container relative'>
				<div className='flex justify-between flex-col items-center gap-8 sm:items-start md:flex-row'>
					<LogoLink />
					{!dashboard && <LaptopNavigationBar />}
				</div>
				<div className='mt-9 grid gap-12 text-center sm:text-start sm:gap-4 sm:grid-cols-[auto_auto] md:grid-cols-2 md:grid-rows-[auto_auto]'>
					<p className='text-neutral-400 sm:col-span-2 md:col-span-1'>
						Audiophile is an all in one stop to fulfill your audio needs.
						We&#39;re a small team of music lovers and sound specialists who are
						devoted to helping you get the most out of personal audio. Come and
						visit our demo facility - we’re open 7 days a week.
					</p>
					<p className='text-neutral-400 whitespace-nowrap md:row-start-2'>
						Copyright {new Date().getFullYear()}. All Rights Reserved
					</p>
					<ul className='flex gap-4 items-center mx-auto sm:mr-0 social__links'>
						<li>
							<a href='/' aria-label='Facebook'>
								<Image
									src='/assets/shared/desktop/icon-facebook.svg'
									width={24}
									height={24}
									alt='Facebook'
								/>
							</a>
						</li>
						<li>
							<a href='/' aria-label='Twitter'>
								<Image
									src='/assets/shared/desktop/icon-twitter.svg'
									width={24}
									height={24}
									alt='Twitter'
								/>
							</a>
						</li>
						<li>
							<a href='/' aria-label='Instagram'>
								<Image
									src='/assets/shared/desktop/icon-instagram.svg'
									width={24}
									height={24}
									alt='Instagram'
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
