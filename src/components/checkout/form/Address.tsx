import InputElement from "@/components/formElements/InputElement";
import STRINGS from "@/utils/string";

const Address = () => {
	return (
		<fieldset className='mt-12'>
			<legend className='subtitle mb-4'>
				{STRINGS.checkout.address.title}
			</legend>
			<div className='grid gap-4 md:grid-cols-2'>
				<div className='md:col-span-2'>
					<InputElement
						type='text'
						name='address'
						id='address'
						required
						label={STRINGS.checkout.address.address}
						value=''
						placeholder={STRINGS.checkout.address.addressPlaceholder}
					/>
				</div>
				<InputElement
					type='text'
					name='zip'
					id='zip'
					required
					label={STRINGS.checkout.address.zip}
					value=''
					placeholder={STRINGS.checkout.address.zipPlaceholder}
				/>
				<InputElement
					type='text'
					name='city'
					id='city'
					required
					label={STRINGS.checkout.address.city}
					value=''
					placeholder={STRINGS.checkout.address.cityPlaceholder}
				/>
				<InputElement
					type='text'
					name='country'
					id='country'
					required
					label={STRINGS.checkout.address.country}
					value=''
					placeholder={STRINGS.checkout.address.countryPlaceholder}
				/>
			</div>
		</fieldset>
	);
};
export default Address;
