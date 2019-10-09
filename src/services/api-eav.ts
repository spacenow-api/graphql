import { IEAVAttribute } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class EAVAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  async getEAVAttribute(id: string): Promise<IEAVAttribute> {
    return await this.get(`eav-attribute/${id}`);
  }
  async getEAVAttributes(
    pageIndex: number,
    pageSize: number
  ): Promise<[IEAVAttribute]> {
    return await this.get(
      `eav-attributes?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
  }
  async getEAVEntityAttributes(
    id: string,
    pageIndex: number,
    pageSize: number
  ): Promise<[IEAVAttribute]> {
    return await this.get(
      `eav-entity-attributes/${id}?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
  }
}

export default EAVAPI;
