import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connectDB from "@/database/connect";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60,
		updateAge: 24 * 60 * 60, // 24 hours
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "text",
					placeholder: "john@gmail.com",
				},
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials, req) => {
				await connectDB();

				try {
					const user = await User.findOne({
						email: credentials?.email,
					});
					if (!user) {
						throw new Error("Invalid Email or Password!");
					}

					const isPasswordCorrect = await bcrypt.compare(
						credentials?.password ? credentials.password : "",
						user.password
					);

					if (!isPasswordCorrect) {
						throw new Error("Wrong Credentials!");
					}

					return user;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			user && (token.user = user);

			return token;
		},
		session: async ({ session, token }: any) => {
			session.user = token.user;

			// delete password from session
			delete session?.user?.password;

			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
	secret: process.env.NEXTAUTH_SECRET,
};
