const QtySelector = ({
	value,
	size,
	setQty,
}: {
	value: any;
	size: string;
	setQty: any;
}) => {
	return (
		<div
			className={`form__group qty__selector flex flex-row w-fit px-4 py-2 md:p-4 ${size}`}
		>
			<button
				className='flex justify-center items-center w-4 leading-normal font-bold text-base text-center'
				onClick={() => setQty((prev: number) => (prev > 1 ? prev - 1 : prev))}
			>
				<span>-</span>
			</button>
			<label htmlFor='quantity' className='sr-only'>
				Quantity
			</label>
			<input
				type='number'
				name='quantity'
				id='quantity'
				min={1}
				max={100}
				value={value}
				className='text-center border-0 text-base font-bold leading-normal'
				onChange={(e) => setQty(parseInt(e.target.value))}
			/>
			<button
				className='flex justify-center items-center w-4 leading-normal font-bold text-base text-center'
				onClick={() => setQty((prev: number) => prev + 1)}
			>
				<span>+</span>
			</button>
		</div>
	);
};
export default QtySelector;
