import Image from "next/image";

const ResponsiveImage = ({
	images,
	altText,
	width,
	height,
	pictureClassName,
	imgClassName,
}: {
	images: Array<string>;
	altText: string;
	width: number;
	height: number;
	pictureClassName: any | null | undefined;
	imgClassName: any | null | undefined;
}) => {
	return (
		<picture className={pictureClassName}>
			<source media='(min-width: 768px)' srcSet={images[0]} />
			<source media='(min-width: 480px)' srcSet={images[1]} />
			<source media='(min-width: 1px)' srcSet={images[2]} />
			<Image
				src={images[2]}
				alt={altText}
				width={width}
				height={height}
				className={imgClassName}
			/>
		</picture>
	);
};
export default ResponsiveImage;
