import { catchApolloError } from './../helpers/exceptions/HttpException'

import { IAuth, IUser, IToken, ITokenValidation } from '../interfaces'

import PersonalizationAPI from '../interfaces/personalization.inteface'

class AuthAPI extends PersonalizationAPI {
  private path = '/auth'

  constructor(apiAddress: string) {
    super()
    this.baseURL = apiAddress
  }

  signup = async (email: string, password: string, firstName: string, lastName: string, userType: string) => {
    return this.post(`${this.path}/signup`, {
      email,
      password,
      firstName,
      lastName,
      userType
    }).catch(catchApolloError)
  }

  login = async (auth: IAuth) => {
    return this.post(`${this.path}/signin`, auth).catch(catchApolloError)
  }

  loginAdmin = async (auth: IAuth): Promise<IUser> => {
    return this.post(`${this.path}/adminSignin`, auth).catch(catchApolloError)
  }

  tokenValidate = async (token: IToken) => {
    return this.post(`${this.path}/token/validate`, token).catch(catchApolloError)
  }

  tokenGoogleValidate = async (iToken: IToken, userType: string) => {
    return this.post(`${this.path}/token/google/validate`, { token: iToken.token, userType }).catch(catchApolloError)
  }

  tokenFacebookValidate = async (iToken: IToken, userType: string = 'guest') => {
    return this.post(`${this.path}/token/facebook/validate?access_token=${iToken.token}&userType=${userType}`).catch(catchApolloError)
  }

  tokenAdminValidate = async (token: IToken): Promise<ITokenValidation> => {
    return this.post(`${this.path}/token/adminValidate`, token).catch(catchApolloError)
  }
}

export default AuthAPI
