// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";
// import connectDB from "@/database/connect";
// import Project from "@/models/Product";
// import { authOptions } from "@/lib/authOptions";
// import errorHandler from "@/lib/errorHandler";

// export const GET = async (request: Request, response: Response) => {
// 	const url = new URL(request.url);
// 	const preview: string = url.searchParams.get("preview") as string;

// 	try {
// 		await connectDB();
// 		const projects = await Project.find(
// 			preview === "false" ? { releaseToProduction: true } : {}
// 		).sort({ updatedAt: -1 });

// 		if (projects) {
// 			return NextResponse.json(projects);
// 		} else {
// 			return new NextResponse("", { status: 404 });
// 		}
// 	} catch (error) {
// 		console.log(error);
// 		return new NextResponse("Database Error", { status: 500 });
// 	}
// };

// export const POST = async (request: Request, response: Response) => {
// 	const session = await getServerSession(authOptions);

// 	if (!session) {
// 		return NextResponse.json({ message: "You are not logged in." });
// 	} else {
// 		const {
// 			name,
// 			heading,
// 			subheading,
// 			productCardImg,
// 			productCardImgAltText,
// 			metaTitle,
// 			metaDescription,
// 			metaKeywords,
// 			startTime,
// 			duration,
// 			role,
// 			tagline,
// 			challenge,
// 			idea,
// 			description,
// 			releaseToProduction,
// 		} = await request.json();

// 		let slug = name.split(" ").join("-");

// 		try {
// 			await connectDB();
// 			const newProject = await Project.create({
// 				name,
// 				heading,
// 				subheading,
// 				productCardImg,
// 				productCardImgAltText,
// 				metaTitle,
// 				metaDescription,
// 				metaKeywords,
// 				startTime,
// 				duration,
// 				role,
// 				tagline,
// 				challenge,
// 				idea,
// 				description,
// 				releaseToProduction,
// 				slug,
// 			});
// 			return NextResponse.json(newProject, { status: 200 });
// 		} catch (error: any) {
// 			const customError = errorHandler(error);
// 			return NextResponse.json(
// 				{
// 					message: customError.message,
// 					errorFields: customError.errorFields,
// 				},
// 				{ status: customError.statusCode }
// 			);
// 		}
// 	}
// };
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
	return NextResponse.json({}, { status: 200 });
};
