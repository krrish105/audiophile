"use client";
import Form from "@/components/checkout/Form";
import OrderPlacedModal from "@/components/checkout/OrderPlacedModal";
import OrderSummary from "@/components/checkout/OrderSummary";
import submitHandler from "@/lib/submitCheckoutForm";
import { useState } from "react";

const FormContainer = () => {
	const [orderPlaced, setOrderPlaced] = useState(false);

	const orderPlacedHandler = () => {
		setOrderPlaced((prev) => !prev);
	};

	return (
		<>
			<form
				className='container grid lg:grid-cols-[auto_22rem] gap-8'
				onSubmit={(e) => submitHandler(e, orderPlacedHandler)}
			>
				<div className='bg-white p-6 rounded-lg md:p-12'>
					<h1 className='heading-3 mb-10'>Checkout</h1>
					<Form />
				</div>
				<OrderSummary />
			</form>
			{orderPlaced && <OrderPlacedModal setOrderPlaced={setOrderPlaced} />}
		</>
	);
};
export default FormContainer;
