import MobileNavigationBar from "@/components/layout/MobileNavigationBar";
import BestAudioGear from "@/components/common/BestAudioGear";
import ProductDesc from "@/components/common/ProductDesc";
import Description from "@/components/product/Description";
import Main from "@/components/product/Main";
import CategoryPageBanners from "@/components/product/CategoryPageBanners";
import Recommendation from "@/components/product/Recommendation";
import BackButton from "@/components/common/BackButton";
import { getProduct } from "@/lib/getProduct";
import { notFound } from "next/navigation";

async function getData(slug: string) {
	const res = getProduct(slug);

	if (res.length <= 0) {
		notFound();
	}
	return res;
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const post = await getData(params.slug).then((res) => res);

	return {
		title: `${params.slug} | Audiophile`,
		description: "",
	};
}

const Product = async ({ params }: { params: { slug: string } }) => {
	const data = await getData(params.slug);

	return (
		<>
			<div className='container mb-6 mt-4 sm:mt-8 md:mt-20 md:mb-14'>
				<BackButton />
			</div>

			<Main image={data[0].image}>
				<ProductDesc
					name={data[0].name}
					description={data[0].description}
					slug={data[0].slug}
					url={`/category/${data[0].name}/product/${params.slug}`}
					thumbnail={data[0].image.mobile}
					location='product'
					isNew={data[0].new}
					price={data[0].price}
				/>
			</Main>
			<Description features={data[0].features} inTheBox={data[0].includes} />
			<CategoryPageBanners
				gallery1={data[0].gallery.first}
				gallery2={data[0].gallery.second}
				gallery3={data[0].gallery.third}
			/>
			<Recommendation
				category={data[0].category}
				recommendations={data[0].others}
			/>

			<section>
				<MobileNavigationBar />
			</section>
			<BestAudioGear />
		</>
	);
};
export default Product;
