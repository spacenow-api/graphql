import { IAssetOutput, IAssetInput } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

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
    return this.post(`${this.path}`, asset);
  };
}

export default AssetsAPI;
