import InputElement from "@/components/formElements/InputElement";
import STRINGS from "@/utils/string";

const Billing = ({
	billName,
	billEmail,
	billPhone,
	formChangeHandler,
}: {
	billName: string;
	billEmail: string;
	billPhone: string;
	formChangeHandler: any;
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
					value={billName}
					placeholder={STRINGS.checkout.billing.namePlaceholder}
					onChangeHandler={formChangeHandler}
				/>
				<InputElement
					type='email'
					name='billEmail'
					id='billEmail'
					required
					label={STRINGS.checkout.billing.email}
					value={billEmail}
					placeholder={STRINGS.checkout.billing.emailPlaceholder}
					onChangeHandler={formChangeHandler}
				/>
				<InputElement
					type='tel'
					name='billPhone'
					id='billPhone'
					required
					label={STRINGS.checkout.billing.phone}
					value={billPhone}
					placeholder={STRINGS.checkout.billing.phonePlaceholder}
					onChangeHandler={formChangeHandler}
				/>
			</div>
		</fieldset>
	);
};

export default Billing;
