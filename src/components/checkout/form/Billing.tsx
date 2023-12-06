import InputElement from "@/components/formElements/InputElement";
import STRINGS from "@/utils/string";

const Billing = () => {
	return (
		<fieldset>
			<legend className='subtitle mb-4'>
				{STRINGS.checkout.billing.title}
			</legend>
			<div className='grid gap-4 md:grid-cols-2'>
				<InputElement
					type='text'
					name='name'
					id='name'
					required
					label={STRINGS.checkout.billing.name}
					value=''
					placeholder={STRINGS.checkout.billing.namePlaceholder}
				/>
				<InputElement
					type='email'
					name='email'
					id='email'
					required
					label={STRINGS.checkout.billing.email}
					value=''
					placeholder={STRINGS.checkout.billing.emailPlaceholder}
				/>
				<InputElement
					type='tel'
					name='tel'
					id='tel'
					required
					label={STRINGS.checkout.billing.phone}
					value=''
					placeholder={STRINGS.checkout.billing.phonePlaceholder}
				/>
			</div>
		</fieldset>
	);
};

export default Billing;
