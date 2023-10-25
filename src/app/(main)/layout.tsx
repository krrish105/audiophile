import Header from "@/components/layout/Header";
import "../globals.css";
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
			<head>
				{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-RQWY716SP9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RQWY716SP9');
</script> */}
				<link rel='manifest' href='/manifest.json' />
			</head>
			<body className={manrope.className} data-cart-open='false'>
				<Header dashboard={false} />
				<main>{children}</main>
				<Footer dashboard={false} />
			</body>
		</html>
	);
}
