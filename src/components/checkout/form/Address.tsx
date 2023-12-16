import InputElement from "@/components/formElements/InputElement";
import STRINGS from "@/utils/string";
import { FormFieldState } from "@/redux/CartProductProp";

const Address = ({
	address,
	zip,
	city,
	country,
	formChangeHandler,
	formBlurHandler,
}: {
	address: FormFieldState;
	zip: FormFieldState;
	city: FormFieldState;
	country: FormFieldState;
	formChangeHandler: any;
	formBlurHandler: any;
}) => {
	return (
		<fieldset className='mt-12'>
			<legend className='subtitle mb-4'>
				{STRINGS.checkout.address.title}
			</legend>
			<div className='grid gap-4 md:grid-cols-2'>
				<div className='md:col-span-2'>
					<InputElement
						type='text'
						name='shippingAddress'
						id='shippingAddress'
						required
						label={STRINGS.checkout.address.address}
						value={address.value}
						placeholder={STRINGS.checkout.address.addressPlaceholder}
						onChangeHandler={formChangeHandler}
						onBlurHandler={formBlurHandler}
						isTouched={address.touched}
						error={address.error}
					/>
				</div>
				<InputElement
					type='text'
					name='shippingZIP'
					id='shippingZIP'
					required
					label={STRINGS.checkout.address.zip}
					value={zip.value}
					placeholder={STRINGS.checkout.address.zipPlaceholder}
					onChangeHandler={formChangeHandler}
					onBlurHandler={formBlurHandler}
					isTouched={zip.touched}
					error={zip.error}
				/>
				<InputElement
					type='text'
					name='shippingCity'
					id='shippingCity'
					required
					label={STRINGS.checkout.address.city}
					value={city.value}
					placeholder={STRINGS.checkout.address.cityPlaceholder}
					onChangeHandler={formChangeHandler}
					onBlurHandler={formBlurHandler}
					isTouched={city.touched}
					error={city.error}
				/>
				<InputElement
					type='text'
					name='shippingCountry'
					id='shippingCountry'
					required
					label={STRINGS.checkout.address.country}
					value={country.value}
					placeholder={STRINGS.checkout.address.countryPlaceholder}
					onChangeHandler={formChangeHandler}
					onBlurHandler={formBlurHandler}
					isTouched={country.touched}
					error={country.error}
				/>
			</div>
		</fieldset>
	);
};
export default Address;
