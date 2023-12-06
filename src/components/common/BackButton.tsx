"use client";
import { useRouter } from "next/navigation";
import STRINGS from "@/utils/string";

const BackButton = () => {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className='link-transparent w-fit capitalize'
		>
			{STRINGS.common.backButton}
		</button>
	);
};
export default BackButton;
