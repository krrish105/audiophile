import Header from "@/components/layout/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AudioPhile Dashboard",
	description: "AudioPhile, an e-commerce website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<meta name='theme-color' content='#000' />
				<link rel='manifest' href='/manifest.json' />
			</head>
			<body className={manrope.className} data-cart-open='false'>
				<Header dashboard={true} />
				<main className='container'>{children}</main>
				<Footer dashboard={true} />
			</body>
		</html>
	);
}
