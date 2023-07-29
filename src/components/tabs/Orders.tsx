import ProductInfo from "@/components/common/ProductInfo";

const Orders = ({ visible }: { visible: boolean }) => {
	return (
		<div id='orders' className={`${visible ? "block" : "hidden"}`}>
			<table className='w-full' border={1}>
				<thead>
					<tr>
						<th></th>
						<th>Product</th>
						<th>Customer</th>
						<th>Date</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{Array.from({ length: 9 }).map((el, i) => {
						return (
							<tr key={i}>
								<td>{i + 1}</td>
								<td>
									<ProductInfo location='dashboard' type='normal' />
								</td>
								<td>Karishma Garg</td>
								<td>10th July, 2023</td>
								<td>In process</td>
								<td>
									<div className='flex gap-4 w-fit mx-auto'>
										<button className='btn btn-transparent px-0 py-2'>
											Accept
										</button>
										<button className='btn btn-transparent px-0 py-2'>
											Reject
										</button>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Orders;
