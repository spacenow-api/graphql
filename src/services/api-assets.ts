import PersonalizationAPI from '../interfaces/personalization.inteface';
import FormData from 'form-data';
import fs from 'fs';

import * as config from '../config';
import * as _ from '../interfaces/listing.interface';
import { IPhotoInput } from '../interfaces/asset.interface';
import streaming from '../helpers/streaming';

class AssetsAPI extends PersonalizationAPI {
	private path = '/photos';

	constructor(apiAssets: string) {
		super();
		this.baseURL = apiAssets;
	}

	uploadPhoto = async (
		asset: IPhotoInput,
	): Promise<_.IListingPhotosResponse> => {
		const { createReadStream, filename }: any = await asset.file;
		const stream = createReadStream();
		await streaming({ stream, filename });
		const formData = new FormData();
		formData.append(
			'file',
			fs.createReadStream(`${config.TEMP_FILE_UPLOAD}/${filename}`),
			filename,
		);
		fs.unlink(`${config.TEMP_FILE_UPLOAD}/${filename}`, () => (err: any) =>
			console.log(err),
		);
		return this.post(`${this.path}/upload/${asset.listingId}`, formData, {
			headers: formData.getHeaders(),
		});
	};

	deletePhoto = (args: any) => {
		return this.delete(`${this.path}/${args.listingId}/${args.photoId}`);
	};

	setCoverPhoto = (args: any) => {
		return this.put(`${this.path}/${args.listingId}/${args.photoId}`);
	};
}

export default AssetsAPI;
