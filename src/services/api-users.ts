import {
  IUser,
  IUserProfileLegacy,
  IResponseUser,
  IProfilePicture,
  IProfilePictureInput,
  IDocument,
  IDocumentInput
} from "../interfaces";

import { catchApolloError } from "./../helpers/exceptions/HttpException";

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
    return this.get(`${this.path}`).catch(catchApolloError);
  };

  getAllUsersLegacy = async (): Promise<IResponseUser> => {
    return this.get(`${this.path}/legacy`).catch(catchApolloError);
  };

  getUser = async (id: string): Promise<IUser> => {
    return this.get(`${this.path}/${id}`).catch(catchApolloError);
  };

  getTotalUsersLegacy = async (): Promise<IResponseUser> => {
    return this.get(`${this.path}/legacy/count/users`).catch(catchApolloError);
  };

  getTotalUsersLegacyByDate = async (days: number): Promise<IResponseUser> => {
    return this.get(`${this.path}/legacy/count/users/date?days=${days}`).catch(catchApolloError);
  };

  getUserLegacyById = async (id: string, token?: string): Promise<IUser> => {
    if (token)
      return this.post(`${this.path}/legacy/email/verification`, { token }).catch(catchApolloError);
    return this.get(`${this.path}/legacy/${id}`).catch(catchApolloError);
  };

  getUsersByProvider = async (provider: string): Promise<IUser> => {
    return this.get(`${this.path}/legacy/provider/${provider}`).catch(catchApolloError);
  };

  createUser = async (user: IUser): Promise<IUser> => {
    return this.post(`${this.path}`, user).catch(catchApolloError);
  };

  updateUserLegacy = async (user: IUser): Promise<IUser> => {
    return this.patch(`${this.path}/legacy?id=${user.id}`, user).catch(
      catchApolloError
    );
  };

  updateUserProfileLegacy = async (userId: string, userProfile: IUserProfileLegacy): Promise<IUserProfileLegacy> => {
    return this.patch(`${this.path}/legacy/profile?id=${userId}`, userProfile).catch(catchApolloError);
  };

  updateProfilePicture = async (picture: IProfilePictureInput): Promise<IProfilePicture> => {
    const { createReadStream, filename }: any = await picture.file;
    const stream = createReadStream();
    await streaming({ stream, filename });
    const formData = new FormData();
    formData.append("file", fs.createReadStream(`${config.TEMP_FILE_UPLOAD}/${filename}`), filename);
    fs.unlink(`${config.TEMP_FILE_UPLOAD}/${filename}`, () => (err: any) => console.error(err));
    return this.post(`${this.path}/legacy/profile/picture?id=${picture.userId}`, formData, { headers: formData.getHeaders() }).catch(catchApolloError);
  };

  updateUserNotification = async (userId: string, notificationId: string, notification: any): Promise<[any]> => {
    return this.post(`users/legacy/${userId}/${notificationId}/notification`, notification).catch(
      catchApolloError
    );
  };

  getUserDocuments = async (userId: string): Promise<[IDocument]> => {
    return this.get(`${this.path}/legacy/documents/${userId}`).catch(
      catchApolloError
    );
  };

  getUserNotifications = async (userId: string): Promise<[any]> => {
    return this.get(`users/legacy/${userId}/notifications`).catch(
      catchApolloError
    );
  };

  deleteDocument = async (id: string, userId: string) => {
    return this.delete(
      `${this.path}/legacy/document/${id}?userId=${userId}`
    ).catch(catchApolloError);
  };

  uploadDocument = async (document: IDocumentInput): Promise<IDocument> => {
    const { createReadStream, filename }: any = await document.file;
    const stream = createReadStream();
    await streaming({ stream, filename });
    const formData = new FormData();
    formData.append("file", fs.createReadStream(`${config.TEMP_FILE_UPLOAD}/${filename}`), filename);
    fs.unlink(`${config.TEMP_FILE_UPLOAD}/${filename}`, () => (err: any) => console.error(err));
    return this.post(`${this.path}/legacy/document/${document.userId}`, formData, { headers: formData.getHeaders() }).catch(catchApolloError);
  };

  deleteUserByEmail = async (email: string): Promise<IUser> => {
    return this.delete(`${this.path}/legacy?email=${email}`).catch(
      catchApolloError
    );
  };

  resetPassword = async (email: string) => {
    return this.post(`${this.path}/legacy/password/reset`, { email }).catch(
      catchApolloError
    );
  };

  resetPasswordUpdate = async (token: string, password: string) => {
    return this.post(`${this.path}/legacy/password/reset/update`, {
      token,
      password
    }).catch(catchApolloError);
  };

  resendEmail = async (email: string) => {
    return this.post(`${this.path}/legacy/reset/verification`, { email }).catch(catchApolloError);
  };
}

export default UsersAPI;
