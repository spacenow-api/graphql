import {
  IUser,
  IUserProfileLegacy,
  IResponseUser,
  IProfilePictureInput
} from "../interfaces";
import PersonalizationAPI from "../interfaces/personalization.inteface";

import FormData from "form-data";
import fs from "fs";
import streaming from "../helpers/streaming";

import * as config from "../config";

class UsersAPI extends PersonalizationAPI {
  private path = "/users";

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAllUsers = async (): Promise<[IUser]> => {
    return this.get(`${this.path}`);
  };

  getAllUsersLegacy = async (): Promise<IResponseUser> => {
    return this.get(`${this.path}/legacy`);
  };

  getUser = async (id: string): Promise<IUser> => {
    return this.get(`${this.path}/${id}`);
  };

  getUserLegacyById = async (id: string): Promise<IUser> => {
    return this.get(`${this.path}/legacy/${id}`);
  };

  createUser = async (user: IUser): Promise<IUser> => {
    return this.post(`${this.path}`, user);
  };

  updateUserLegacy = async (user: IUser): Promise<IUser> => {
    return this.patch(`${this.path}/legacy?id=${user.id}`, user);
  };

  updateUserProfileLegacy = async (
    userId: string,
    userProfile: IUserProfileLegacy
  ): Promise<IUserProfileLegacy> => {
    return this.patch(`${this.path}/legacy/profile?id=${userId}`, userProfile);
  };

  updateProfilePicture = async (
    picture: IProfilePictureInput
  ): Promise<IProfilePictureInput> => {
    const { createReadStream, filename }: any = await picture.file;
    const stream = createReadStream();
    await streaming({ stream, filename });
    const formData = new FormData();
    formData.append(
      "file",
      fs.createReadStream(`${config.TEMP_FILE_UPLOAD}/${filename}`),
      filename
    );
    fs.unlink(`${config.TEMP_FILE_UPLOAD}/${filename}`, () => (err: any) =>
      console.log(err)
    );
    return this.post(
      `${this.path}/legacy/profile/picture?id=${picture.userId}`,
      formData,
      {
        headers: formData.getHeaders()
      }
    );
  };

  deleteUserByEmail = async (email: string): Promise<IUser> => {
    return this.delete(`${this.path}/legacy?email=${email}`);
  };
}

export default UsersAPI;
