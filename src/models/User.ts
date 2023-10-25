import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const { Schema, model } = mongoose;
const { genSalt, hash, compare } = bcryptjs;

// Later add email & password validation
const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Please provide an email"],
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please provide a password"],
			minlength: 8,
			trim: true,
		},
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function () {
	if (this.isModified("password")) {
		const salt = await genSalt(10);
		this.password = await hash(this.password ? this.password : "", salt);
	}
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
