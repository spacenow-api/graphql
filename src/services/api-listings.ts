import { IListingCategory } from "../interfaces";
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

  getListingCategory = async (id: string): Promise<IListingCategory> => {
    return this.get(`listing-category/${id}`);
  };

  postListingCategory = async (
    data: IListingCategory
  ): Promise<IListingCategory> => {
    return this.post(`listing-category`, new Object({ ...data }));
  };

  putListingCategory = async (
    id: string,
    data: IListingCategory
  ): Promise<IListingCategory> => {
    return this.put(`listing-category/${id}`, new Object({ ...data }));
  };

  deleteListingCategory = async (id: string) => {
    return this.put(`listing-category/${id}`);
  };
}

export default ListingsAPI;
