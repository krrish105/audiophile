const InputElement = ({ type, name, id, required, label, value }: any) => {
	return (
		<div className='form__group'>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				name={name}
				id={id}
				aria-required={required}
				value={value}
			/>
		</div>
	);
};

export default InputElement;
