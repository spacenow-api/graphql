import PersonalizationAPI from '../interfaces/personalization.inteface';
import FormData from 'form-data';
import fs from 'fs';

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
		const sFile = createReadStream(filename);
		fs.writeFileSync(filename, sFile);
		console.debug(sFile.resume());
		const formData = new FormData();
		formData.append('file', sFile.resume(), filename);
		return this.post(`${this.path}/upload/${asset.listingId}`, formData, {
			headers: formData.getHeaders(),
		});
	};
}

export default AssetsAPI;
