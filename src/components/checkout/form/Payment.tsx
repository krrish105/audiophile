import Image from "next/image";
import InputElement from "@/components/formElements/InputElement";
import STRINGS from "@/utils/string";
import RadioButton from "@/components/formElements/RadioButton";
import { FormFieldState } from "@/redux/CartProductProp";

const Payment = ({
	mode,
	eMoneyNum,
	eMoneyPin,
	formChangeHandler,
	formBlurHandler,
}: {
	mode: FormFieldState;
	eMoneyNum: FormFieldState;
	eMoneyPin: FormFieldState;
	formChangeHandler: any;
	formBlurHandler: any;
}) => {
	return (
		<fieldset className='mt-12'>
			<legend className='subtitle mb-4'>
				{STRINGS.checkout.payment.title}
			</legend>
			<div className='grid gap-4 md:grid-cols-2'>
				<div className='md:col-span-2 grid gap-4 sm:grid-cols-2'>
					<strong className='text-xs'>
						{STRINGS.checkout.payment.method.title}
					</strong>
					<div className='flex flex-col gap-4'>
						<RadioButton
							name='paymentType'
							id='e-money'
							label={STRINGS.checkout.payment.method.method1}
							value='e-money'
							checked={mode.value === "e-money"}
							onChangeHandler={formChangeHandler}
							onBlurHandler={formBlurHandler}
							required
						/>
						<RadioButton
							name='paymentType'
							id='cod'
							label={STRINGS.checkout.payment.method.method2}
							value='cod'
							checked={mode.value === "cod"}
							onChangeHandler={formChangeHandler}
							onBlurHandler={formBlurHandler}
							required
						/>
					</div>
				</div>
				{mode.value === "cod" ? (
					<div className='flex gap-8 col-span-2 mt-4 items-center'>
						<Image
							src='/assets/checkout/icon-cash-on-delivery.svg'
							width={48}
							height={48}
							alt=''
							className='h-fit'
						/>
						<p className='text-neutral-500'>
							{STRINGS.checkout.payment.cash.desc}
						</p>
					</div>
				) : (
					<>
						<InputElement
							type='text'
							name='eMoneyNum'
							id='eMoneyNumber'
							required
							label={STRINGS.checkout.payment.eMoney.number}
							value={eMoneyNum.value}
							onChangeHandler={formChangeHandler}
							placeholder={STRINGS.checkout.payment.eMoney.numberPlaceholder}
							onBlurHandler={formBlurHandler}
							isTouched={eMoneyNum.touched}
							error={eMoneyNum.error}
						/>
						<InputElement
							type='text'
							name='eMoneyPin'
							id='eMoneyPin'
							required
							label={STRINGS.checkout.payment.eMoney.pin}
							value={eMoneyPin.value}
							onChangeHandler={formChangeHandler}
							placeholder={STRINGS.checkout.payment.eMoney.pinPlaceholder}
							onBlurHandler={formBlurHandler}
							isTouched={eMoneyPin.touched}
							error={eMoneyPin.error}
						/>
					</>
				)}
			</div>
		</fieldset>
	);
};
export default Payment;
