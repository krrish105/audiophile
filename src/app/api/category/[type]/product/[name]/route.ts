// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";
// import connectDB from "@/database/connect";
// import Project from "@/models/Product";
// import { authOptions } from "@/lib/authOptions";
// import errorHandler from "@/lib/errorHandler";

// export const GET = async (request: Request, { params }: any) => {
// 	let { name } = params;
// 	name = name.split("-").join(" ");
// 	const url = new URL(request.url);
// 	const preview: string = url.searchParams.get("preview") as string;

// 	try {
// 		await connectDB();
// 		const project = await Project.findOne({ name: name });

// 		if (project) {
// 			let projectFilter: any = {};

// 			if (preview === "false") {
// 				projectFilter = {
// 					releaseToProduction: true,
// 				};
// 			}

// 			let nextProject = await Project.find({
// 				updatedAt: { $lt: project.updatedAt },
// 				...projectFilter,
// 			})
// 				.sort({ updatedAt: -1 })
// 				.limit(1);

// 			if (nextProject.length <= 0) {
// 				const firstProject = await Project.find({
// 					updatedAt: { $gt: project.updatedAt },
// 					...projectFilter,
// 				})
// 					.sort({ updatedAt: -1 })
// 					.limit(1);

// 				nextProject = firstProject;
// 			}

// 			let projectResult = NextResponse.json({
// 				currentProject: project,
// 				nextProject: nextProject,
// 			});
// 			if (preview === "false") {
// 				if (project.releaseToProduction) {
// 					return projectResult;
// 				}
// 			} else if (preview === "true") {
// 				return projectResult;
// 			}
// 		}
// 	} catch (error) {
// 		return NextResponse.json(
// 			{
// 				error: error,
// 			},
// 			{ status: 500 }
// 		);
// 	}
// };

// export const PATCH = async (request: Request, { params }: any) => {
// 	const session = await getServerSession(authOptions);

// 	if (!session) {
// 		return NextResponse.json({ message: "You are not logged in." });
// 	} else {
// 		const { name } = params;
// 		const {
// 			name: projectName,
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

// 		let slug = projectName.split(" ").join("-");
// 		try {
// 			await connectDB();

// 			const project = await Project.findByIdAndUpdate(
// 				name,
// 				{
// 					name: projectName,
// 					heading,
// 					subheading,
// 					productCardImg,
// 					productCardImgAltText,
// 					metaTitle,
// 					metaDescription,
// 					metaKeywords,
// 					startTime,
// 					duration,
// 					role,
// 					tagline,
// 					challenge,
// 					idea,
// 					description,
// 					releaseToProduction,
// 					slug,
// 				},
// 				{
// 					new: true,
// 					runValidators: true,
// 				}
// 			);

// 			if (project) {
// 				await project.save();
// 				return NextResponse.json(project, { status: 200 });
// 			}
// 		} catch (error) {
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

// export const DELETE = async (request: Request, { params }: any) => {
// 	const session = await getServerSession(authOptions);

// 	if (!session) {
// 		return NextResponse.json({ message: "You are not logged in." });
// 	} else {
// 		const { name } = params;
// 		try {
// 			await connectDB();

// 			const project = await Project.findOneAndDelete({ name });
// 			if (project) {
// 				return NextResponse.json(project, { status: 200 });
// 			}

// 			return new NextResponse("NOT FOUND", { status: 404 });
// 		} catch (error) {
// 			return NextResponse.json(
// 				{
// 					error: error,
// 				},
// 				{ status: 500 }
// 			);
// 		}
// 	}
// };

import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
	return NextResponse.json({}, { status: 200 });
};
