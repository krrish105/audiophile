import ResponsiveImage from "@/components/common/ResponsiveImage";
import Image from "next/image";

const Main = ({
	children,
	image,
}: {
	children: React.ReactNode;
	image: Array<string>;
}) => {
	return (
		<section
			className={`container block__padding grid items-center gap-10 text-center md:grid-cols-2 lg:gap-36 md:text-start`}
		>
			<div className={`order-1`}>{children}</div>
			<ResponsiveImage
				images={[...image]}
				altText={""}
				width={540}
				height={580}
				pictureClassName={"rounded-lg h-full"}
				imgClassName={"w-full rounded-lg h-full max-h-[500px] object-cover"}
			/>
		</section>
	);
};
export default Main;
