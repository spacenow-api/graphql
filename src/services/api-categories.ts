import { ICategory } from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

class CategoriesAPI extends PersonalizationAPI {
  private path = "/categories";

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getCategories = async (): Promise<ICategory> => {
    return this.get(`${this.path}`);
  };
}

export default CategoriesAPI;
