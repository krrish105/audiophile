import Card from "@/components/product/Card";

const Recommendation = ({ category, recommendations }: any) => {
	return (
		<section className='container'>
			<h3 className='heading-3 text-center font-bold mb-16'>
				You May also like
			</h3>
			<div className='flex gap-8 flex-col sm:flex-row sm:gap-4 md:gap-8'>
				{recommendations.map((el: any) => {
					return (
						<Card
							key={el.name}
							name={el.name}
							image={el.image}
							link={`/category/${category}/product/${el.slug}`}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Recommendation;
