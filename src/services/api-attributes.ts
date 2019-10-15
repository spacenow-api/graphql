import { IAttribute } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class AttributesAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  async getAttribute(id: string): Promise<IAttribute> {
    return await this.get(`attribute/${id}`);
  }
  async getAttributes(
    pageIndex: number,
    pageSize: number
  ): Promise<[IAttribute]> {
    return await this.get(
      `attributes?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
  }
}

export default AttributesAPI;
