const RadioButton = ({
	name,
	id,
	required,
	label,
	checked = false,
	value,
	changeHandler,
}: any) => {
	return (
		<label className='form__group radio__btn' htmlFor={id}>
			<span>{label}</span>
			<input
				type='radio'
				name={name}
				id={id}
				defaultChecked={checked}
				defaultValue={value}
				onChange={(e) => changeHandler(e)}
				// aria-required={required}
			/>
		</label>
	);
};

export default RadioButton;
