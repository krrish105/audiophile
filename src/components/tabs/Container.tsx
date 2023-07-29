"use client";
import { useState } from "react";
import Home from "@/components/tabs/Home";
import Orders from "@/components/tabs/Orders";
import Products from "@/components/tabs/Products";

const Container = () => {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<>
			<div className='border-b border-gray-300'>
				<div className='flex'>
					<button
						className={`btn py-3 ${
							activeTab === 1 ? "btn-orange" : "text-black"
						}`}
						onClick={() => setActiveTab(1)}
					>
						Home
					</button>
					<button
						className={`btn py-3 ${
							activeTab === 2 ? "btn-orange" : "text-black"
						}`}
						onClick={() => setActiveTab(2)}
					>
						Orders
					</button>
					<button
						className={`btn py-3 ${
							activeTab === 3 ? "btn-orange" : "text-black"
						}`}
						onClick={() => setActiveTab(3)}
					>
						Products
					</button>
				</div>
			</div>
			<div className='my-6 tabs__content'>
				<Home visible={activeTab === 1} />
				<Orders visible={activeTab === 2} />
				<Products visible={activeTab === 3} />
			</div>
		</>
	);
};
export default Container;
