const RadioButton = ({
	name,
	id,
	required,
	label,
	checked = false,
	value,
	onChangeHandler,
	onBlurHandler,
}: {
	name: string;
	id: string;
	required: boolean;
	label: string;
	value: string;
	checked: boolean;
	onChangeHandler: any;
	onBlurHandler: any;
}) => {
	return (
		<label className='form__group radio__btn' htmlFor={id}>
			<span>{label}</span>
			<input
				type='radio'
				name={name}
				id={id}
				defaultChecked={checked}
				defaultValue={value}
				onChange={onChangeHandler}
				onBlur={onBlurHandler}
				// required={required}
			/>
		</label>
	);
};

export default RadioButton;
