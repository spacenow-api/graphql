import PersonalizationAPI from '../interfaces/personalization.inteface';
import FormData from 'form-data';

import * as _ from '../interfaces/listing.interface';
import { IPhotoInput } from '../interfaces/asset.interface';

class AssetsAPI extends PersonalizationAPI {
	private path = '/photos';

	constructor(apiAddress: string) {
		super();
		this.baseURL = apiAddress;
	}

	uploadPhoto = async (
		asset: IPhotoInput,
	): Promise<_.IListingPhotosResponse> => {
		const { createReadStream, filename }: any = await asset.file;
		const formData = new FormData();
		formData.append('file', createReadStream(), filename);
		return <_.IListingPhotosResponse>await this.post(
			`${this.path}/upload/${asset.listingId}`,
			formData,
			{
				headers: formData.getHeaders(),
			},
		);
	};
}

export default AssetsAPI;
