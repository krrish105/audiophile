import mongoose from "mongoose";

const { Schema } = mongoose;

const CartSchema = new Schema(
	{
		total: {
			type: Number,
			required: [true, "Please provide the total"],
		},
		shipping: {
			type: Number,
			required: [true, "Please provide the shipping"],
		},
		vat: {
			type: Number,
			required: [true, "Please provide the VAT"],
		},
		grandTotal: {
			type: Number,
			required: [true, "Please provide the Grand Total"],
		},
		products: {
			type: Schema.Types.ObjectId,
			ref: "Product",
			required: [true, "Please provide the Products"],
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

CartSchema.virtual("cart", {
	ref: "Orders",
	localField: "_id",
	foreignField: "cart",
	justOne: true,
});

const CartModel = mongoose.models.Cart || mongoose.model("Cart", CartSchema);

export default CartModel;

// Connect to the products model
