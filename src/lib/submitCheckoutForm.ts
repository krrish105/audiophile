const submitHandler = (e: any, orderPlacedHandler: any) => {
	e.preventDefault();
	orderPlacedHandler();
};
export default submitHandler;
