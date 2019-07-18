import { ICategory, ICategoryLegacy } from '../interfaces';
import PersonalizationAPI from '../interfaces/personalization.inteface';

class CategoriesAPI extends PersonalizationAPI {
  private path = '/categories';

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getRootCategories = async (): Promise<[ICategory]> => {
    return this.get(`${this.path}`);
  };

  getCategory = async (id: string): Promise<ICategory> => {
    return this.get(`${this.path}/${id}`);
  };

  createCategory = async (user: ICategory): Promise<ICategory> => {
    return this.post(`${this.path}`, user);
  };

  getCategoriesLegacy = async (): Promise<ICategoryLegacy> => {
    return this.get(`${this.path}/legacy`);
  };
}

export default CategoriesAPI;
