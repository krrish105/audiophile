import InputElement from "@/components/formElements/InputElement";
import STRINGS from "@/utils/string";

const Address = ({
	shippingAddress,
	shippingZIP,
	shippingCity,
	shippingCountry,
	formChangeHandler,
}: {
	shippingAddress: string;
	shippingZIP: string;
	shippingCity: string;
	shippingCountry: string;
	formChangeHandler: any;
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
						value={shippingAddress}
						placeholder={STRINGS.checkout.address.addressPlaceholder}
						onChangeHandler={formChangeHandler}
					/>
				</div>
				<InputElement
					type='text'
					name='shippingZIP'
					id='shippingZIP'
					required
					label={STRINGS.checkout.address.zip}
					value={shippingZIP}
					placeholder={STRINGS.checkout.address.zipPlaceholder}
					onChangeHandler={formChangeHandler}
				/>
				<InputElement
					type='text'
					name='shippingCity'
					id='shippingCity'
					required
					label={STRINGS.checkout.address.city}
					value={shippingCity}
					placeholder={STRINGS.checkout.address.cityPlaceholder}
					onChangeHandler={formChangeHandler}
				/>
				<InputElement
					type='text'
					name='shippingCountry'
					id='shippingCountry'
					required
					label={STRINGS.checkout.address.country}
					value={shippingCountry}
					placeholder={STRINGS.checkout.address.countryPlaceholder}
					onChangeHandler={formChangeHandler}
				/>
			</div>
		</fieldset>
	);
};
export default Address;
