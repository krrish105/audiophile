"use client";
import InputElement from "@/components/formElements/InputElement";
import RadioButton from "@/components/formElements/RadioButton";
import Image from "next/image";
import { useState } from "react";

const Form = () => {
	const [paymentMode, setPaymentMode] = useState<any>("e-money");

	const paymentModeHandler = (e: any) => {
		setPaymentMode(e.target.value);
	};

	return (
		<>
			<fieldset>
				<legend className='subtitle mb-4'>Billing Details</legend>
				<div className='grid gap-4 md:grid-cols-2'>
					<InputElement
						type='text'
						name='name'
						id='name'
						required
						label='Name'
						value=''
						placeholder='Alexei Ward'
					/>
					<InputElement
						type='email'
						name='email'
						id='email'
						required
						label='Email Address'
						value=''
						placeholder='alexei@mail.com'
					/>
					<InputElement
						type='tel'
						name='tel'
						id='tel'
						required
						label='Phone Number'
						value=''
						placeholder='+1 202-555-0136'
					/>
				</div>
			</fieldset>
			<fieldset className='mt-12'>
				<legend className='subtitle mb-4'>Shipping Info</legend>
				<div className='grid gap-4 md:grid-cols-2'>
					<div className='md:col-span-2'>
						<InputElement
							type='text'
							name='address'
							id='address'
							required
							label='Address'
							value=''
							placeholder='1137 Williams Avenue'
						/>
					</div>
					<InputElement
						type='text'
						name='zip'
						id='zip'
						required
						label='ZIP Code'
						value=''
						placeholder='10001'
					/>
					<InputElement
						type='text'
						name='city'
						id='city'
						required
						label='City'
						value=''
						placeholder='New York'
					/>
					<InputElement
						type='text'
						name='country'
						id='country'
						required
						label='Country'
						value=''
						placeholder='United States'
					/>
				</div>
			</fieldset>
			<fieldset className='mt-12'>
				<legend className='subtitle mb-4'>Payment Details</legend>
				<div className='grid gap-4 md:grid-cols-2'>
					<div className='md:col-span-2 grid gap-4 sm:grid-cols-2'>
						<strong className='text-xs'>Payment Method</strong>
						<div className='flex flex-col gap-4'>
							<RadioButton
								name='payment'
								id='e-money'
								label='e-Money'
								value='e-money'
								checked={paymentMode === "e-money"}
								changeHandler={paymentModeHandler}
							/>
							<RadioButton
								name='payment'
								id='cod'
								label='Cash on Delivery'
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
								The ‘Cash on Delivery’ option enables you to pay in cash when
								our delivery courier arrives at your residence. Just make sure
								your address is correct so that your order will not be
								cancelled.
							</p>
						</div>
					) : (
						<>
							<InputElement
								type='text'
								name='eMoneyNumber'
								id='eMoneyNumber'
								required
								label='e-Money Number'
								value=''
								placeholder='238521993'
							/>
							<InputElement
								type='text'
								name='eMoneyPin'
								id='eMoneyPin'
								required
								label='e-Money Pin'
								value=''
								placeholder='6891'
							/>
						</>
					)}
				</div>
			</fieldset>
		</>
	);
};
export default Form;
