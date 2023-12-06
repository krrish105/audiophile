"use client";
import Image from "next/image";
import { useState } from "react";
import InputElement from "@/components/formElements/InputElement";
import STRINGS from "@/utils/string";
import RadioButton from "@/components/formElements/RadioButton";

const Payment = () => {
	const [paymentMode, setPaymentMode] = useState<any>("e-money");

	const paymentModeHandler = (e: any) => {
		setPaymentMode(e.target.value);
	};

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
							name='payment'
							id='e-money'
							label={STRINGS.checkout.payment.method.method1}
							value='e-money'
							checked={paymentMode === "e-money"}
							changeHandler={paymentModeHandler}
						/>
						<RadioButton
							name='payment'
							id='cod'
							label={STRINGS.checkout.payment.method.method2}
							value='cod'
							checked={paymentMode === "cod"}
							changeHandler={paymentModeHandler}
						/>
					</div>
				</div>
				{paymentMode === "cod" ? (
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
							name='eMoneyNumber'
							id='eMoneyNumber'
							required
							label={STRINGS.checkout.payment.eMoney.number}
							value=''
							placeholder={STRINGS.checkout.payment.eMoney.numberPlaceholder}
						/>
						<InputElement
							type='text'
							name='eMoneyPin'
							id='eMoneyPin'
							required
							label={STRINGS.checkout.payment.eMoney.pin}
							value=''
							placeholder={STRINGS.checkout.payment.eMoney.pinPlaceholder}
						/>
					</>
				)}
			</div>
		</fieldset>
	);
};
export default Payment;
