import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema(
	{
		cart: {
			type: Schema.Types.ObjectId,
			ref: "Cart",
			required: [true, "Please provide the cart details"],
		},
		billingDetails: {
			type: {
				name: String,
				email: String,
				phone: String,
			},
			required: [true, "Please provide the billing details"],
			trim: true,
		},
		shippingInfo: {
			type: {
				address: String,
				zip: String,
				city: String,
				country: String,
			},
			required: [true, "Please provide the Shipping Info"],
			trim: true,
		},
		paymentMode: {
			type: String,
			required: [true, "Please provide the Shipping Info"],
			trim: true,
			enum: ["eMoney", "COD"],
		},
		eMoney: {
			type: {
				number: Number,
				pin: Number,
			},
		},
		accepted: {
			type: Boolean,
		},
	},
	{ timestamps: true }
);
const OrdersModel =
	mongoose.models.Orders || mongoose.model("Orders", OrderSchema);

export default OrdersModel;

// Connect to the cart model
