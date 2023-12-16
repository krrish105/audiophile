import InputElement from "@/components/formElements/InputElement";
import STRINGS from "@/utils/string";
import { FormFieldState } from "@/redux/CartProductProp";

const Billing = ({
	name,
	email,
	phone,
	formChangeHandler,
	formBlurHandler,
}: {
	name: FormFieldState;
	email: FormFieldState;
	phone: FormFieldState;
	formChangeHandler: any;
	formBlurHandler: any;
}) => {
	return (
		<fieldset>
			<legend className='subtitle mb-4'>
				{STRINGS.checkout.billing.title}
			</legend>
			<div className='grid gap-4 md:grid-cols-2'>
				<InputElement
					type='text'
					name='billName'
					id='billName'
					required
					label={STRINGS.checkout.billing.name}
					value={name.value}
					placeholder={STRINGS.checkout.billing.namePlaceholder}
					onChangeHandler={formChangeHandler}
					onBlurHandler={formBlurHandler}
					isTouched={name.touched}
					error={name.error}
				/>
				<InputElement
					type='email'
					name='billEmail'
					id='billEmail'
					required
					label={STRINGS.checkout.billing.email}
					value={email.value}
					placeholder={STRINGS.checkout.billing.emailPlaceholder}
					onChangeHandler={formChangeHandler}
					onBlurHandler={formBlurHandler}
					isTouched={email.touched}
					error={email.error}
				/>
				<InputElement
					type='tel'
					name='billPhone'
					id='billPhone'
					required
					label={STRINGS.checkout.billing.phone}
					value={phone.value}
					placeholder={STRINGS.checkout.billing.phonePlaceholder}
					onChangeHandler={formChangeHandler}
					onBlurHandler={formBlurHandler}
					isTouched={phone.touched}
					error={phone.error}
				/>
			</div>
		</fieldset>
	);
};

export default Billing;
