import MobileNavigationBar from "@/components/layout/MobileNavigationBar";
import HomeHero from "@/components/layout/HomeHero";
import BestAudioGear from "@/components/common/BestAudioGear";

export default function Home() {
	return (
		<>
			<HomeHero />
			<section>
				<MobileNavigationBar />
			</section>
			<BestAudioGear />
		</>
	);
}
