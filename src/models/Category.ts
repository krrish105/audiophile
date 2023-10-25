import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name"],
			trim: true,
			unique: true,
			enum: ["Headphones", "Speakers", "Earphones"],
		},
		// TODO: If user has not provided this, then make the title using name
		metaTitle: {
			type: String,
			trim: true,
			unique: true,
		},
		metaDescription: {
			type: String,
			required: [true, "Please provide a metaDescription"],
			trim: true,
			unique: true,
		},
		// Mobile, tablet, desktop
		image: {
			type: Object,
			required: [true, "Please provide images"],
			trim: true,
		},
	},
	{
		timestamps: true,
		validateBeforeSave: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

CategorySchema.virtual("category", {
	ref: "Product",
	localField: "_id",
	foreignField: "category",
	justOne: true,
});

const CategoryModel =
	mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default CategoryModel;

// Connect to the products model
