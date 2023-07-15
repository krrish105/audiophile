const Description = () => {
	return (
		<div className='container grid gap-22 md:grid-cols-[1fr_.5fr] md:gap-28'>
			<section>
				<h2 className='heading-3 font-bold mb-8'>Features</h2>
				<p className='text-neutral-500'>
					Featuring a genuine leather head strap and premium earcups, these
					headphones deliver superior comfort for those who like to enjoy
					endless listening. It includes intuitive controls designed for any
					situation. Whether you’re taking a business call or just in your own
					personal space, the auto on/off and pause features ensure that you’ll
					never miss a beat.
					<br />
					<br />
					The advanced Active Noise Cancellation with built-in equalizer allow
					you to experience your audio world on your terms. It lets you enjoy
					your audio in peace, but quickly interact with your surroundings when
					you need to. Combined with Bluetooth 5. 0 compliant connectivity and
					17 hour battery life, the XX99 Mark II headphones gives you superior
					sound, cutting-edge technology, and a modern design aesthetic.
				</p>
			</section>
			<section className='sm:grid sm:grid-cols-2 md:block'>
				<h2 className='heading-3 font-bold mb-8'>in the box</h2>
				<ul className='text-neutral-500 product__list flex flex-col gap-2'>
					<li>
						<span>1x</span>Headphone Unit
					</li>
					<li>
						<span>2x</span>Replacement Earcups
					</li>
					<li>
						<span>1x</span>User Manual
					</li>
					<li>
						<span>1x</span>3.5mm 5m Audio Cable
					</li>
					<li>
						<span>1x</span>Travel Bag
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Description;
