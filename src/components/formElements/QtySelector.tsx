const QtySelector = ({ value, size }: any) => {
	return (
		<div
			className={`form__group qty__selector flex flex-row w-fit p-4 ${size}`}
		>
			<button className='flex justify-center items-center w-4 leading-normal font-bold text-base text-center'>
				<span>-</span>
			</button>
			<input
				type='number'
				name='number'
				id='number'
				value={1}
				className='text-center border-0 text-base font-bold leading-normal'
			/>
			<button className='flex justify-center items-center w-4 leading-normal font-bold text-base text-center'>
				<span>+</span>
			</button>
		</div>
	);
};
export default QtySelector;
