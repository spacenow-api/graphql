import { ICategory, ICategoryAttribute } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class CategoriesAPI extends PersonalizationAPI {
  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getRootCategories = async (): Promise<[ICategory]> => {
    return this.get(`categories/root`);
  };

  getCategories = async (
    pageIndex: number,
    pageSize: number
  ): Promise<[ICategory]> => {
    return this.get(`categories?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  };

  getCategory = async (id: string): Promise<ICategory> => {
    return this.get(`category/${id}`);
  };

  getCategoryAttributes = async (
    id: string,
    pageIndex: number,
    pageSize: number
  ): Promise<[ICategoryAttribute]> => {
    return await this.get(
      `category-attributes/${id}?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
  };

  createCategory = async (category: ICategory): Promise<ICategory> => {
    return this.post(`category`, new Object({ ...category }));
  };

  updateCategory = async (
    id: string,
    category: ICategory
  ): Promise<ICategory> => {
    return this.put(`category/${id}`, new Object({ ...category }));
  };
}

export default CategoriesAPI;
