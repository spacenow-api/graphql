import FormData from "form-data";
import fs from "fs";

import streaming from "../helpers/streaming";
import { catchApolloError } from "./../helpers/exceptions/HttpException";

import PersonalizationAPI from "../interfaces/personalization.inteface";
import * as _ from "../interfaces/listing.interface";
import { IPhotoInput } from "../interfaces";

import * as config from "../config";

class AssetsAPI extends PersonalizationAPI {
  private path = "/photos";

  constructor(api: string) {
    super();
    this.baseURL = api;
  }

  uploadPhoto = async (asset: IPhotoInput): Promise<_.IListingPhotosResponse> => {
    const { createReadStream, filename }: any = await asset.file;
    const stream = createReadStream();
    await streaming({ stream, filename });
    const formData = new FormData();
    formData.append("file", fs.createReadStream(`${config.TEMP_FILE_UPLOAD}/${filename}`), filename);
    formData.append("category", asset.category);
    fs.unlink(`${config.TEMP_FILE_UPLOAD}/${filename}`, () => (err: any) => console.error(err));
    return this.post(`${this.path}/upload/${asset.listingId}`, formData, { headers: formData.getHeaders() }).catch(catchApolloError);
  };

  deletePhoto = (args: any) => {
    return this.delete(`${this.path}/${args.listingId}/${args.photoId}`);
  };

  setCoverPhoto = (args: any) => {
    return this.put(`${this.path}/${args.listingId}/${args.photoId}`);
  };
}

export default AssetsAPI;
