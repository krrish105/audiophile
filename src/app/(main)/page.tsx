import MobileNavigationBar from "@/components/layout/MobileNavigationBar";
import HomeHero from "@/components/layout/HomeHero";
import BestAudioGear from "@/components/common/BestAudioGear";
import OrangeBanner from "@/components/home/OrangeBanner";

export default function Home() {
	return (
		<>
			<HomeHero />
			<section>
				<MobileNavigationBar />
			</section>
			<div className='container'>
				<OrangeBanner />
			</div>
			<BestAudioGear />
		</>
	);
}
