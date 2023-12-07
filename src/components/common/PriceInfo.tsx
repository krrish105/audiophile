const PriceInfo = ({
	title,
	price,
	type,
}: {
	title: string;
	price: number;
	type: string | null | undefined;
}) => {
	return (
		<div className='flex justify-between'>
			<span className='uppercase text-neutral-500 font-medium'>{title}</span>
			<strong
				className={`text-lg ${type === "grandTotal" ? "text-[#D87D4A]" : ""}`}
			>
				$ {price}
			</strong>
		</div>
	);
};
export default PriceInfo;
