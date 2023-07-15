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
			className={`container block__padding grid items-center gap-10 text-center sm:grid-cols-2 lg:gap-36 md:text-start`}
		>
			<div className={`order-1`}>{children}</div>
			<picture className={`rounded-lg h-full`}>
				<source media='(min-width: 480px)' src={image[0]} />
				<source media='(min-width: 768px)' src={image[1]} />
				<Image
					src={image[2]}
					width={540}
					height={580}
					alt=''
					className='w-full rounded-lg h-full'
				/>
			</picture>
		</section>
	);
};
export default Main;
