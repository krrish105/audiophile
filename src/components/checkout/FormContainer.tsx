"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import OrderPlacedModal from "@/components/checkout/OrderPlacedModal";
import OrderSummary from "@/components/checkout/OrderSummary";
import Billing from "@/components/checkout/form/Billing";
import Address from "@/components/checkout/form/Address";
import Payment from "@/components/checkout/form/Payment";

const FormContainer = () => {
	const [orderPlaced, setOrderPlaced] = useState(false);
	const formik = useFormik({
		initialValues: {
			billName: "",
			billEmail: "",
			billPhone: "",
			shippingAddress: "",
			shippingZIP: "",
			shippingCity: "",
			shippingCountry: "",
			paymentType: "e-money",
			eMoneyNum: "",
			eMoneyPin: "",
		},
		validationSchema: Yup.object({
			billName: Yup.string().required("Required"),
			billEmail: Yup.string()
				.email("Invalid email address")
				.required("Required"),
			billPhone: Yup.string().required("Required"),
			shippingAddress: Yup.string().required("Required"),
			shippingZIP: Yup.string().required("Required"),
			shippingCity: Yup.string().required("Required"),
			shippingCountry: Yup.string().required("Required"),
			paymentType: Yup.string().oneOf(["e-money", "cod"]).required("Required"),
			eMoneyNum: Yup.number().when("paymentType", {
				is: "e-money",
				then: (schema) => schema.required("Required"),
			}),
			eMoneyPin: Yup.number().when("paymentType", {
				is: "e-money",
				then: (schema) => schema.required("Required"),
			}),
		}),
		onSubmit: (values) => {
			setOrderPlaced(true);
		},
	});

	return (
		<>
			<form
				className='container grid lg:grid-cols-[auto_22rem] gap-8'
				onSubmit={formik.handleSubmit}
			>
				<div className='bg-white p-6 rounded-lg md:p-12'>
					<h1 className='heading-3 mb-10'>Checkout</h1>
					<Billing
						name={{
							value: formik.values.billName,
							touched: formik.touched.billName,
							error: formik.errors.billName,
						}}
						email={{
							value: formik.values.billEmail,
							touched: formik.touched.billEmail,
							error: formik.errors.billEmail,
						}}
						phone={{
							value: formik.values.billPhone,
							touched: formik.touched.billPhone,
							error: formik.errors.billPhone,
						}}
						formChangeHandler={formik.handleChange}
						formBlurHandler={formik.handleBlur}
					/>
					<Address
						address={{
							value: formik.values.shippingAddress,
							touched: formik.touched.shippingAddress,
							error: formik.errors.shippingAddress,
						}}
						zip={{
							value: formik.values.shippingZIP,
							touched: formik.touched.shippingZIP,
							error: formik.errors.shippingZIP,
						}}
						city={{
							value: formik.values.shippingCity,
							touched: formik.touched.shippingCity,
							error: formik.errors.shippingCity,
						}}
						country={{
							value: formik.values.shippingCountry,
							touched: formik.touched.shippingCountry,
							error: formik.errors.shippingCountry,
						}}
						formChangeHandler={formik.handleChange}
						formBlurHandler={formik.handleBlur}
					/>
					<Payment
						mode={{
							value: formik.values.paymentType,
							touched: formik.touched.paymentType,
							error: formik.errors.paymentType,
						}}
						eMoneyNum={{
							value: formik.values.eMoneyNum,
							touched: formik.touched.eMoneyNum,
							error: formik.errors.eMoneyNum,
						}}
						eMoneyPin={{
							value: formik.values.eMoneyPin,
							touched: formik.touched.eMoneyPin,
							error: formik.errors.eMoneyPin,
						}}
						formChangeHandler={formik.handleChange}
						formBlurHandler={formik.handleBlur}
					/>
				</div>
				<OrderSummary />
			</form>
			{orderPlaced && <OrderPlacedModal setOrderPlaced={setOrderPlaced} />}
		</>
	);
};
export default FormContainer;
