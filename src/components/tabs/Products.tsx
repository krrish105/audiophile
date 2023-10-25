import ProductInfo from "@/components/common/ProductInfo";
import Image from "next/image";
import Link from "next/link";

const Products = ({ visible }: { visible: boolean }) => {
	return (
		<div id='products' className={`${visible ? "block" : "hidden"}`}>
			<Link
				href='/dashboard/products/create'
				className='btn btn-transparent ml-auto px-0 w-fit'
			>
				Add Product
			</Link>
			<div>
				<details className='mt-8 dashboard__products' open>
					<summary>
						<h2>Headphones</h2>
					</summary>
					<div className='grid gap-4'>
						{Array.from({ length: 5 }).map((el, i) => {
							return (
								<div
									className='border border-gray-400 rounded-lg flex gap-6 py-4 px-6 items-center justify-between'
									key={i}
								>
									<ProductInfo location={"dashboard"} type={"normal"} />
									<div className='flex gap-4 flex-col'>
										<button>
											<Image
												src={"/vectors/edit.svg"}
												alt={"Edit"}
												width={16}
												height={16}
											/>
											<span className='sr-only'>Edit</span>
										</button>
										<button>
											<Image
												src={"/vectors/delete.svg"}
												alt={"Edit"}
												width={16}
												height={16}
											/>
											<span className='sr-only'>Edit</span>
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</details>
				<details className='mt-8 dashboard__products' open>
					<summary>
						<h2>Speakers</h2>
					</summary>
					<div className='grid gap-4'>
						{Array.from({ length: 5 }).map((el, i) => {
							return (
								<div
									className='border border-gray-400 rounded-lg flex gap-6 py-4 px-6 items-center justify-between'
									key={i}
								>
									<ProductInfo location={"dashboard"} type={"normal"} />
									<div className='flex gap-4 flex-col'>
										<button>
											<Image
												src={"/vectors/edit.svg"}
												alt={"Edit"}
												width={16}
												height={16}
											/>
											<span className='sr-only'>Edit</span>
										</button>
										<button>
											<Image
												src={"/vectors/delete.svg"}
												alt={"Edit"}
												width={16}
												height={16}
											/>
											<span className='sr-only'>Edit</span>
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</details>
				<details className='mt-8 dashboard__products' open>
					<summary>
						<h2>Earphones</h2>
					</summary>
					<div className='grid gap-4'>
						{Array.from({ length: 5 }).map((el, i) => {
							return (
								<div
									className='border border-gray-400 rounded-lg flex gap-6 py-4 px-6 items-center justify-between'
									key={i}
								>
									<ProductInfo location={"dashboard"} type={"normal"} />
									<div className='flex gap-4 flex-col'>
										<button>
											<Image
												src={"/vectors/edit.svg"}
												alt={"Edit"}
												width={16}
												height={16}
											/>
											<span className='sr-only'>Edit</span>
										</button>
										<button>
											<Image
												src={"/vectors/delete.svg"}
												alt={"Edit"}
												width={16}
												height={16}
											/>
											<span className='sr-only'>Edit</span>
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</details>
			</div>
		</div>
	);
};
export default Products;
