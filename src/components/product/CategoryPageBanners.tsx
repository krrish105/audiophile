import ResponsiveImage from "@/components/common/ResponsiveImage";

const CategoryPageBanners = ({ gallery1, gallery2, gallery3 }: any) => {
	return (
		<div className='container block__padding'>
			<div className='grid sm:grid-cols-[auto_auto] sm:grid-rows-2 gap-4 md:gap-8'>
				<ResponsiveImage
					images={gallery1}
					altText={""}
					width={445}
					height={280}
					pictureClassName={"row-start-1"}
					imgClassName={"rounded-lg"}
				/>
				<ResponsiveImage
					images={gallery2}
					altText={""}
					width={445}
					height={280}
					pictureClassName={"row-start-2"}
					imgClassName={"rounded-lg"}
				/>
				<ResponsiveImage
					images={gallery3}
					altText={""}
					width={635}
					height={560}
					pictureClassName={"row-span-2"}
					imgClassName={"rounded-lg sm:h-full"}
				/>
			</div>
		</div>
	);
};
export default CategoryPageBanners;
