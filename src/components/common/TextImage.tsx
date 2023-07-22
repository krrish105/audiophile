import ResponsiveImage from "@/components/common/ResponsiveImage";
import Image from "next/image";

const TextImage = ({
	children,
	image,
	imageDirection,
}: {
	children: React.ReactNode;
	image: Array<string>;
	imageDirection: string;
}) => {
	return (
		<article
			className={`container block__padding grid items-center gap-10 text-center md:grid-cols-2 lg:gap-36 md:text-start`}
		>
			<div
				className={`order-1 ${
					imageDirection === "right" ? "md:order-1" : "md:order-2"
				}`}
			>
				{children}
			</div>
			<ResponsiveImage
				images={[...image]}
				width={540}
				height={580}
				altText=''
				pictureClassName={`rounded-lg ${
					imageDirection === "right" ? "md:order-2" : "md:order-1"
				}`}
				imgClassName='w-full rounded-lg max-h-[500px] object-cover'
			/>
		</article>
	);
};
export default TextImage;
