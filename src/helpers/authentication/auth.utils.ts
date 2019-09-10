import jwt from "jsonwebtoken";

import { jwtSecret } from './../../config';

class AuthUtils {

  public static async getUserIdByToken(token: string) {
    let tokenString = token;
    if (tokenString.includes('Bearer'))
      tokenString = token.substring(token.indexOf(' ')).trim();
    const decoded: any = await jwt.verify(tokenString, jwtSecret);
    if (decoded)
      return decoded.id;
    return null;
  }
}

export default AuthUtils;