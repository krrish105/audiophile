const RadioButton = ({ name, id, required, label, checked, value }: any) => {
	return (
		<div className='form__group radio__btn'>
			<label htmlFor={id}>{label}</label>
			<input type='radio' name={name} id={id} checked={checked} value={value} />
		</div>
	);
};

export default RadioButton;
