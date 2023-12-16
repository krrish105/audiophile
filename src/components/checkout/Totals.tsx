import PriceInfo from "@/components/common/PriceInfo";

const Totals = ({
	priceSummary,
}: {
	priceSummary: {
		total: number;
		shipping: number;
		vat: number;
		grandTotal: number;
	};
}) => {
	return (
		<div className='flex flex-col gap-2'>
			<PriceInfo
				title='Total'
				price={priceSummary.total.toFixed(2)}
				type='subPrice'
			/>
			<PriceInfo
				title='Shipping'
				price={priceSummary.shipping.toFixed(2)}
				type='subPrice'
			/>
			<PriceInfo
				title='VAT (INCLUDED)'
				price={priceSummary.vat.toFixed(2)}
				type='subPrice'
			/>
			<div className='mt-4'>
				<PriceInfo
					title='GRAND TOTAL'
					price={priceSummary.grandTotal.toFixed(2)}
					type='grandTotal'
				/>
			</div>
		</div>
	);
};
export default Totals;
