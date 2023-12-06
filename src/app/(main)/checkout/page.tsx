import FormContainer from "@/components/checkout/FormContainer";
import BackButton from "@/components/common/BackButton";

const Checkout = () => {
	return (
		<div className='checkout bg-[#F1F1F1] pb-36'>
			<div className='container pb-6 pt-4 sm:pt-8 md:pt-20 md:pb-14'>
				<BackButton />
			</div>
			<FormContainer />
		</div>
	);
};
export default Checkout;
