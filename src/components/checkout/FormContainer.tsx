"use client";
import { useState } from "react";
import OrderPlacedModal from "@/components/checkout/OrderPlacedModal";
import OrderSummary from "@/components/checkout/OrderSummary";
import submitHandler from "@/lib/submitCheckoutForm";
import Billing from "@/components/checkout/form/Billing";
import Address from "@/components/checkout/form/Address";
import Payment from "@/components/checkout/form/Payment";

const FormContainer = () => {
	const [orderPlaced, setOrderPlaced] = useState(false);
	const [formState, setFormState] = useState({
		billName: "",
		billEmail: "",
		billPhone: "",
		shippingAddress: "",
		shippingZIP: "",
		shippingCity: "",
		shippingCountry: "",
		paymentType: "",
		eMoneyNum: "",
		eMoneyPin: "",
	});

	const orderPlacedHandler = () => {
		setOrderPlaced((prev) => !prev);
	};

	const formChangeHandler = (e: any) => {
		setFormState((prev) => {
			return { ...prev, [e.target.name]: [e.target.value] };
		});
	};

	return (
		<>
			<form
				className='container grid lg:grid-cols-[auto_22rem] gap-8'
				onSubmit={(e) => submitHandler(e, orderPlacedHandler)}
			>
				<div className='bg-white p-6 rounded-lg md:p-12'>
					<h1 className='heading-3 mb-10'>Checkout</h1>
					<Billing
						billName={formState.billName}
						billEmail={formState.billEmail}
						billPhone={formState.billPhone}
						formChangeHandler={formChangeHandler}
					/>
					<Address
						shippingAddress={formState.shippingAddress}
						shippingZIP={formState.shippingZIP}
						shippingCity={formState.shippingCity}
						shippingCountry={formState.shippingCountry}
						formChangeHandler={formChangeHandler}
					/>
					{/* <Payment /> */}
				</div>
				<OrderSummary />
			</form>
			{orderPlaced && <OrderPlacedModal setOrderPlaced={setOrderPlaced} />}
		</>
	);
};
export default FormContainer;
