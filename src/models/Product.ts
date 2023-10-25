import mongoose from "mongoose";

const { Schema } = mongoose;

interface IncludedItems {
	quantity: number;
	item: string;
}
interface ProductImageDataArr {
	mobile: string;
	tablet: string;
	desktop: string;
}
const ProductImageData = {
	mobile: String,
	tablet: String,
	desktop: String,
};

const ProductSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name"],
			trim: true,
			unique: true,
		},
		descriptionOnCategoryPage: {
			type: String,
			required: [true, "Please provide a description to show on category page"],
			trim: true,
		},
		descriptionOnProductPage: {
			type: String,
			required: [true, "Please provide a description to show on product page"],
			trim: true,
		},
		label: {
			type: String,
			trim: true,
		},
		price: {
			type: Number,
			required: [true, "Please provide a price"],
		},
		quantity: {
			type: Number,
			required: [true, "Please provide a quantity"],
		},
		maxQty: {
			type: Number,
			required: [true, "Please provide the max Quantity"],
		},
		features: {
			type: String,
			required: [true, "Please provide features"],
			trim: true,
		},
		// TODO: Add the datatype such that there is an array which contains an object of this kind: {quantity, item}
		includedItems: {
			type: Array<IncludedItems>,
			required: [true, "Please provide features"],
			trim: true,
		},
		status: {
			type: String,
			enum: ["Active, Inactive"],
			required: [true, "Please provide a status"],
			trim: true,
		},
		metaDescription: {
			type: String,
			required: [true, "Please provide a metaDescription"],
			trim: true,
			unique: true,
		},
		slug: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		thumnail: {
			type: ProductImageData,
			required: [true, "Please provide images"],
			trim: true,
		},
		image: {
			type: ProductImageData,
			required: [true, "Please provide images"],
			trim: true,
		},
		// Three Images containg all Mobile, tablet, desktop versions
		galleryBanners: {
			type: Array<ProductImageDataArr>,
			required: [true, "Please provide images"],
			trim: true,
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: "Category",
			required: [true, "Please provide the category name"],
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

ProductSchema.virtual("products", {
	ref: "Cart",
	localField: "_id",
	foreignField: "products",
	justOne: false,
});

const ProductModel =
	mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;
