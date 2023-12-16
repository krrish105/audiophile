const InputElement = ({
	type,
	name,
	id,
	required,
	label,
	value,
	placeholder,
	onChangeHandler,
	onBlurHandler,
	isTouched,
	error,
}: {
	type: string;
	name: string;
	id: string;
	required: boolean;
	label: string;
	value: string;
	placeholder: string;
	onChangeHandler: any;
	onBlurHandler: any;
	isTouched: boolean | undefined;
	error: string | undefined;
}) => {
	return (
		<div className={`form__group ${isTouched && error ? "has__error" : ""}`}>
			<div className='flex justify-between'>
				<label htmlFor={id}>{label}</label>
				{isTouched && error ? <div className='error'>{error}</div> : null}
			</div>
			<input
				type={type}
				name={name}
				id={id}
				aria-required={required}
				defaultValue={value}
				placeholder={placeholder}
				onChange={onChangeHandler}
				onBlur={onBlurHandler}
			/>
		</div>
	);
};

export default InputElement;
