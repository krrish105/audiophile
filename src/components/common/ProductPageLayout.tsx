import BackButton from "@/components/common/BackButton";
import MobileNavigationBar from "@/components/layout/MobileNavigationBar";
import BestAudioGear from "@/components/common/BestAudioGear";

const ProductPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className='container mb-6 mt-4 sm:mt-8 md:mt-20 md:mb-14'>
				<BackButton />
			</div>
			{children}
			<section>
				<MobileNavigationBar />
			</section>
			<BestAudioGear />
		</>
	);
};
export default ProductPageLayout;
