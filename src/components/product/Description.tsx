const Description = ({ features, inTheBox }: any) => {
	return (
		<div className='container grid gap-22 md:grid-cols-[1fr_.5fr] md:gap-28'>
			<section>
				<h2 className='heading-3 font-bold mb-8'>Features</h2>
				<p className='text-neutral-500'>{features}</p>
			</section>
			<section className='sm:grid sm:grid-cols-2 md:block'>
				<h2 className='heading-3 font-bold mb-8'>in the box</h2>
				<ul className='text-neutral-500 product__list flex flex-col gap-2'>
					{inTheBox.map((el: any, i: any) => {
						return (
							<li key={el.item}>
								<span>{el.quantity}x</span>
								{el.item}
							</li>
						);
					})}
				</ul>
			</section>
		</div>
	);
};

export default Description;
