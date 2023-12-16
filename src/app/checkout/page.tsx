"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import FormContainer from "@/components/checkout/FormContainer";
import BackButton from "@/components/common/BackButton";

const Checkout = () => {
	const CartInititalState = useSelector((state: RootState) => state.cartSlice);

	if (CartInititalState.cart.length <= 0) {
		redirect("/");
	} else {
		return (
			<div className='checkout bg-primaryGrey pb-36'>
				<div className='container pb-6 pt-4 sm:pt-8 md:pt-20 md:pb-14'>
					<BackButton />
				</div>
				<FormContainer />
			</div>
		);
	}
};
export default Checkout;
