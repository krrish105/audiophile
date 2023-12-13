const InputElement = ({
	type,
	name,
	id,
	required,
	label,
	value,
	placeholder,
	onChangeHandler,
}: {
	type: string;
	name: string;
	id: string;
	required: boolean;
	label: string;
	value: string;
	placeholder: string;
	onChangeHandler: any;
}) => {
	return (
		<div className='form__group'>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				name={name}
				id={id}
				aria-required={required}
				defaultValue={value}
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		</div>
	);
};

export default InputElement;
