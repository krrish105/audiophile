"use client";
import Image from "next/image";
import { useState } from "react";
import LaptopNavigationBar from "@/components/layout/LaptopNavigationBar";
import MobileNavigationBar from "@/components/layout/MobileNavigationBar";

const Navigation = () => {
	const [mobileNavVisible, isMobileNavVisible] = useState(false);

	const mobileNavVisibleHandler = () => {
		isMobileNavVisible((prev) => !prev);
	};

	return (
		<nav>
			<button
				className='hamburger relative md:hidden'
				onClick={mobileNavVisibleHandler}
			>
				<Image
					src='/assets/shared/tablet/icon-hamburger.svg'
					width={16}
					height={16}
					alt='Open Navigation Menu'
				/>
			</button>
			{mobileNavVisible && (
				<div className='backdrop' onClick={mobileNavVisibleHandler}></div>
			)}
			{mobileNavVisible ? <MobileNavigationBar /> : <LaptopNavigationBar />}
		</nav>
	);
};
export default Navigation;
