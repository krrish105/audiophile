import InputElement from "@/components/formElements/InputElement";

const Create = () => {
	return (
		<>
			<h1 className='heading-3 my-6'>Add Product</h1>
			<form action='' method='post' className='my-10'>
				<input type='hidden' name='quantity' value='0' />
				<div className='grid gap-4 md:grid-cols-2'>
					<InputElement
						type='text'
						name='name'
						id='name'
						required
						label='Name'
						value=''
						placeholder='Alexei Ward'
					/>
					<InputElement
						type='text'
						name='label'
						id='label'
						required
						label='Label'
						value=''
						placeholder='alexei@mail.com'
					/>
					<InputElement
						type='number'
						name='price'
						id='price'
						required
						label='Price'
						value=''
						placeholder='alexei@mail.com'
					/>
					<InputElement
						type='number'
						name='maxQty'
						id='maxQty'
						required
						label='Max Quantity'
						value=''
						placeholder='alexei@mail.com'
					/>
					{/* Add a dynamic input element where we can add number input fiels for includedItems  */}
					<InputElement
						type='text'
						name='status'
						id='status'
						required
						label='Status (Active / Inactive)'
						value=''
						placeholder='alexei@mail.com'
					/>
					<InputElement
						type='text'
						name='metaDescription'
						id='metaDescription'
						required
						label='Meta Description'
						value=''
						placeholder='alexei@mail.com'
					/>
					<div className='form__group'>
						<label htmlFor='features'>Features</label>
						<textarea name='features' id='features' rows={4}></textarea>
					</div>
					<div className='form__group'>
						<label htmlFor='descriptionOnCategoryPage'>
							Description For Category Page
						</label>
						<textarea
							name='descriptionOnCategoryPage'
							id='descriptionOnCategoryPage'
							rows={4}
						></textarea>
					</div>
					<div className='form__group'>
						<label htmlFor='descriptionOnCategoryPage'>
							Description For Product Page
						</label>
						<textarea
							name='descriptionOnProductPage'
							id='descriptionOnProductPage'
							rows={4}
						></textarea>
					</div>
				</div>
				<div className='mt-10'>
					<h2 className='heading-5 my-6'>Images</h2>
					<div className='grid gap-6 md:grid-cols-2'>
						<fieldset name='productImage'>
							<legend>Product Image</legend>
							<InputElement
								type='text'
								name='productImageMobile'
								id='productImageMobile'
								required
								label='Mobile'
								value=''
							/>
							<InputElement
								type='text'
								name='productImageTablet'
								id='productImageTablet'
								required
								label='Tablet'
								value=''
							/>
							<InputElement
								type='text'
								name='productImageDesktop'
								id='productImageDesktop'
								required
								label='Desktop'
								value=''
							/>
						</fieldset>
						<fieldset name='productThumbnail'>
							<legend>Product Thumbnail</legend>
							<InputElement
								type='text'
								name='productImageMobileThumbnail'
								id='productImageMobileThumbnail'
								required
								label='Mobile'
								value=''
							/>
							<InputElement
								type='text'
								name='productImageTabletThumbnail'
								id='productImageTabletThumbnail'
								required
								label='Tablet'
								value=''
							/>
							<InputElement
								type='text'
								name='productImageDesktopThumbnail'
								id='productImageDesktopThumbnail'
								required
								label='Desktop'
								value=''
							/>
						</fieldset>
						<fieldset name='galleryBanners1'>
							<legend>Gallery Banners 1</legend>
							<InputElement
								type='text'
								name='galleryBanner1Mobile'
								id='galleryBanner1Mobile'
								required
								label='Mobile'
								value=''
							/>
							<InputElement
								type='text'
								name='galleryBanner1Tablet'
								id='galleryBanner1Tablet'
								required
								label='Tablet'
								value=''
							/>
							<InputElement
								type='text'
								name='galleryBanner1Desktop'
								id='galleryBanner1Desktop'
								required
								label='Desktop'
								value=''
							/>
						</fieldset>
						<fieldset name='galleryBanners2'>
							<legend>Gallery Banners 2</legend>
							<InputElement
								type='text'
								name='galleryBanner2Mobile'
								id='galleryBanner2Mobile'
								required
								label='Mobile'
								value=''
							/>
							<InputElement
								type='text'
								name='galleryBanner2Tablet'
								id='galleryBanner2Tablet'
								required
								label='Tablet'
								value=''
							/>
							<InputElement
								type='text'
								name='galleryBanner2Desktop'
								id='galleryBanner2Desktop'
								required
								label='Desktop'
								value=''
							/>
						</fieldset>
						<fieldset name='galleryBanners'>
							<legend>Gallery Banners 3</legend>
							<InputElement
								type='text'
								name='galleryBanner3Mobile'
								id='galleryBanner3Mobile'
								required
								label='Mobile'
								value=''
							/>
							<InputElement
								type='text'
								name='galleryBanner3Tablet'
								id='galleryBanner3Tablet'
								required
								label='Tablet'
								value=''
							/>
							<InputElement
								type='text'
								name='galleryBanner3Desktop'
								id='galleryBanner3Desktop'
								required
								label='Desktop'
								value=''
							/>
						</fieldset>
					</div>
				</div>
			</form>
		</>
	);
};
export default Create;
