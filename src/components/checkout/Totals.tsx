import PriceInfo from "@/components/common/PriceInfo";

const Totals = () => {
	return (
		<div className='flex flex-col gap-2'>
			<PriceInfo title='Total' price='5396' type='subPrice' />
			<PriceInfo title='Shipping' price='50' type='subPrice' />
			<PriceInfo title='VAT (INCLUDED)' price='1079' type='subPrice' />
			<div className='mt-4'>
				<PriceInfo title='GRAND TOTAL' price='5,446' type='grandTotal' />
			</div>
		</div>
	);
};
export default Totals;
