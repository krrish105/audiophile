export type ProductImageType = {
	mobile: string;
	tablet: string;
	desktop: string;
};

export type ProductType = {
	slug: string;
	name: string;
	price: number;
	thumbnail: string;
	quantity: number;
	category: string;
};

export type FormFieldState = {
	value: string;
	touched: boolean | undefined;
	error: string | undefined;
};
