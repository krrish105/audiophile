import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AudioPhile",
	description: "AudioPhile, an e-commerce website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={manrope.className} data-cart-open='false'>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
