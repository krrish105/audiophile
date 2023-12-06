import Billing from "@/components/checkout/form/Billing";
import Address from "@/components/checkout/form/Address";
import Payment from "@/components/checkout/form/Payment";

const Form = () => {
	return (
		<>
			<Billing />
			<Address />
			<Payment />
		</>
	);
};
export default Form;
