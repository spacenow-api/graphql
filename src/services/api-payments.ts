import { PersonalizationAPI, IAccountRequest, IAccountResponse, IAccountDeleteConfirmation } from "../interfaces";

class PaymenstsAPI extends PersonalizationAPI {

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAccount = async (): Promise<IAccountResponse> => {
    return this.get('/payment/account');
  };

  createAccount = async (data: IAccountRequest): Promise<IAccountResponse> => {
    return this.post('/payment/account', data);
  };

  removeAccount = async (): Promise<IAccountDeleteConfirmation> => {
    return this.delete('/payment/account');
  };
}

export default PaymenstsAPI;
