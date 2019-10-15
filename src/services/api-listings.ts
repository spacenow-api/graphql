import { IListingCategory, IListingAttribute } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class ListingsAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getListingCategories = async (
    id: number,
    pageIndex: number,
    pageSize: number
  ): Promise<[IListingCategory]> => {
    return this.get(
      `listing-categories/${id}?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
  };

  getListingAttributes = async (id: number): Promise<[IListingAttribute]> => {
    return this.get(`listing-attributes/${id}`);
  };

  getListingCategory = async (id: string): Promise<IListingCategory> => {
    return this.get(`listing-category/${id}`);
  };

  getListingAttribute = async (
    id: string,
    type: string
  ): Promise<IListingAttribute> => {
    return this.get(`listing-attribute/${type}/${id}`);
  };

  postListingCategory = async (
    data: IListingCategory
  ): Promise<IListingCategory> => {
    return this.post(`listing-category`, new Object({ ...data }));
  };

  postListingAttribute = async (
    data: IListingAttribute,
    type: string
  ): Promise<IListingAttribute> => {
    return this.post(`listing-attribute/${type}`, new Object({ ...data }));
  };

  putListingCategory = async (
    id: string,
    data: IListingCategory
  ): Promise<IListingCategory> => {
    return this.put(`listing-category/${id}`, new Object({ ...data }));
  };

  putListingAttribute = async (
    id: string,
    data: IListingAttribute,
    type: string
  ): Promise<IListingAttribute> => {
    return this.put(`listing-attribute/${type}/${id}`, new Object({ ...data }));
  };

  deleteListingCategory = async (id: string) => {
    return this.put(`listing-category/${id}`);
  };

  deleteListingATTRIBUTE = async (id: string, type: string) => {
    return this.put(`listing-attribute/${type}/${id}`);
  };
}

export default ListingsAPI;
