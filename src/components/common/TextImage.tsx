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
			<picture
				className={`rounded-lg ${
					imageDirection === "right" ? "md:order-2" : "md:order-1"
				}`}
			>
				<source media='(min-width: 480px)' src={image[0]} />
				<source media='(min-width: 768px)' src={image[1]} />
				<Image
					src={image[2]}
					width={540}
					height={580}
					alt=''
					className='w-full rounded-lg'
				/>
			</picture>
		</article>
	);
};
export default TextImage;
