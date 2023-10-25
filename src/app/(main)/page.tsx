import MobileNavigationBar from "@/components/layout/MobileNavigationBar";
import HomeHero from "@/components/layout/HomeHero";
import BestAudioGear from "@/components/common/BestAudioGear";
import Type1Banner from "@/components/product/banners/Type1";
import Type2Banner from "@/components/product/banners/Type2";
import Type3Banner from "@/components/product/banners/Type3";

export default function Home() {
	return (
		<>
			<HomeHero />
			<section>
				<MobileNavigationBar />
			</section>
			<div className='container'>
				<Type1Banner />
				<Type2Banner />
				<Type3Banner />
			</div>
			<BestAudioGear />
		</>
	);
}
