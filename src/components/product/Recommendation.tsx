import Card from "@/components/product/Card";

const Recommendation = () => {
	return (
		<section className='container'>
			<h3 className='heading-3 text-center font-bold mb-16'>
				You May also like
			</h3>
			<div className='flex gap-8 flex-col sm:flex-row sm:gap-4 md:gap-8'>
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
};

export default Recommendation;
