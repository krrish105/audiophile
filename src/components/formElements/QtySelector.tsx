"use client";
import { useState } from "react";

const QtySelector = ({ value, size }: { value: any; size: string }) => {
	const [qty, setQty] = useState<number>(value);

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
			<input
				type='number'
				name='number'
				id='number'
				min={1}
				value={qty}
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
