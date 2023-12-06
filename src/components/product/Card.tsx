import ResponsiveImage from "@/components/common/ResponsiveImage";
import Link from "next/link";

const Card = ({ image, name, link }: any) => {
	return (
		<div className='text-center'>
			<ResponsiveImage
				images={image}
				altText={""}
				width={350}
				height={318}
				pictureClassName={""}
				imgClassName={"rounded-lg w-full sm:w-auto"}
			/>
			<strong className='block my-8 sm:mt-10 sm:mb-8'>{name}</strong>
			<Link href={link} className='btn btn-orange'>
				See Product
			</Link>
		</div>
	);
};
export default Card;
