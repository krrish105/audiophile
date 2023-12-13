import BestAudioGear from "@/components/common/BestAudioGear";
import MobileNavigationBar from "@/components/layout/MobileNavigationBar";
import TextImage from "@/components/common/TextImage";
import ProductDesc from "@/components/common/ProductDesc";
import { notFound } from "next/navigation";
import { getProductsOfCategory } from "@/lib/getProductsOfCategory";

async function getData(name: string) {
	const res = getProductsOfCategory(name);

	if (res.length <= 0) {
		notFound();
	}
	return res;
}

export async function generateMetadata({
	params,
}: {
	params: { name: string };
}) {
	const post = await getData(params.name).then((res) => res);

	return {
		title: `${params.name} | Audiophile`,
		description: "",
	};
}

const Category = async ({ params }: { params: { name: string } }) => {
	const data = await getData(params.name);

	return (
		<div className='category__page'>
			<div className='hero bg-blackBg relative'>
				<div className='container'>
					<h1 className='text-white text-center py-24 heading-2'>
						{params.name}
					</h1>
				</div>
			</div>
			{data.map((el, i) => {
				return (
					<TextImage
						key={el.name}
						image={el.image}
						imageDirection={`${i % 2 === 0 ? "right" : "left"}`}
					>
						<ProductDesc
							name={el.name}
							description={el.description}
							slug={el.slug}
							url={`/category/${params.name}/product/${el.slug}`}
							thumbnail={el.image.mobile}
							location='category'
							isNew={el.new}
							price={el.price}
							category={el.category}
						/>
					</TextImage>
				);
			})}

			<section>
				<MobileNavigationBar />
			</section>
			<BestAudioGear />
		</div>
	);
};

export default Category;
