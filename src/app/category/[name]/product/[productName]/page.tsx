import BestAudioGear from "@/components/common/BestAudioGear";
import MobileNavigationBar from "@/components/layout/MobileNavigationBar";
import Link from "next/link";

const Product = ({ params }: { params: { productName: string } }) => {
	return (
		<>
			<Link href='/' className='btn btn-transparent container mt-20'>
				Go Back
			</Link>
			<section>
				<MobileNavigationBar />
			</section>
			<BestAudioGear />
		</>
	);
};
export default Product;
