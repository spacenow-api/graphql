import { RESTDataSource } from 'apollo-datasource-rest';
import { ICategory } from '../interfaces';

class CategoriesAPI extends RESTDataSource {
  private path = '/categories';

  constructor() {
    super();
    this.baseURL = 'http://localhost:4001/gateway';
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
}

export default CategoriesAPI;
