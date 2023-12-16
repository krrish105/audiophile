const PriceInfo = ({
	title,
	price,
	type,
}: {
	title: string;
	price: string;
	type: string | null | undefined;
}) => {
	return (
		<div className='flex justify-between'>
			<span className='uppercase text-neutral-500 font-medium'>{title}</span>
			<strong
				className={`text-lg ${
					type === "grandTotal" ? "text-primaryOrange" : ""
				}`}
			>
				$ {price}
			</strong>
		</div>
	);
};
export default PriceInfo;
