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
			<PriceInfo title='Total' price={priceSummary.total} type='subPrice' />
			<PriceInfo
				title='Shipping'
				price={priceSummary.shipping}
				type='subPrice'
			/>
			<PriceInfo
				title='VAT (INCLUDED)'
				price={priceSummary.vat}
				type='subPrice'
			/>
			<div className='mt-4'>
				<PriceInfo
					title='GRAND TOTAL'
					price={priceSummary.grandTotal}
					type='grandTotal'
				/>
			</div>
		</div>
	);
};
export default Totals;
