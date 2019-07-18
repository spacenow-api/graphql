import { IAssetOutput, IAssetInput } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";
import FormData from "form-data";
import fs from "fs";

class AssetsAPI extends PersonalizationAPI {
  private path = "/assets";

  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getAllAssets = async (): Promise<[IAssetOutput]> => {
    return this.get(`${this.path}`);
  };

  getAsset = async (id: string): Promise<IAssetOutput> => {
    return this.get(`${this.path}/${id}`);
  };

  createAsset = async (asset: IAssetInput): Promise<IAssetOutput> => {
    const { createReadStream, filename }: any = await asset.file;
    const sFile = createReadStream(filename);
    fs.writeFileSync(filename, sFile);

    console.log(sFile.resume());
    const formData = new FormData();
    formData.append("file", sFile.resume(), filename);
    return this.post(`${this.path}/${asset.folder}`, formData, {
      headers: formData.getHeaders()
    });
  };
}

export default AssetsAPI;
