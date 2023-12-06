import products from "../../data.json";

export const getProduct = (slug: string) => {
	return products.filter((el, i) => {
		if (el.slug === slug) {
			return true;
		}
	});
};
