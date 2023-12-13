import products from "../../public/data.json";

export const getProductsOfCategory = (name: string) => {
	return products.filter((el, i) => {
		if (el.category === name) {
			return true;
		}
	});
};
