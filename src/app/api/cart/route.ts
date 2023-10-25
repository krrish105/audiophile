import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
	return NextResponse.json({}, { status: 200 });
};
