const InputElement = ({
	type,
	name,
	id,
	required,
	label,
	value,
	placeholder,
}: any) => {
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
			/>
		</div>
	);
};

export default InputElement;
