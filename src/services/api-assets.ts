import {
  IAssetOutput,
  IAssetInput,
  IListingAssetOutput,
  IListingAssetInput
} from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";
import FormData from "form-data";
import fs from "fs";

class AssetsAPI extends PersonalizationAPI {
  private path = "/assets";

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAllAssets = async (): Promise<[IAssetOutput]> => {
    return this.get(`${this.path}`);
  };

  getAsset = async (id: string): Promise<IAssetOutput> => {
    return this.get(`${this.path}/${id}`);
  };

  getAllAssetsByListingId = async (
    listingId: string
  ): Promise<IListingAssetOutput> => {
    return this.get(`${this.path}/listing/${listingId}`);
  };

  createAsset = async (asset: IAssetInput): Promise<IAssetOutput> => {
    const { createReadStream, filename }: any = await asset.file;
    const sFile = createReadStream(filename);
    fs.writeFileSync(filename, sFile);
    console.debug(sFile.resume());
    const formData = new FormData();
    formData.append("file", sFile.resume(), filename);
    return this.post(`${this.path}/${asset.folder}`, formData, {
      headers: formData.getHeaders()
    });
  };

  createListingAsset = async (
    asset: IListingAssetInput
  ): Promise<IAssetOutput> => {
    return this.post(`/listingAsset`, asset);
  };
}

export default AssetsAPI;
