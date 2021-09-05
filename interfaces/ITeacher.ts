import { IUser } from './IUser';

export interface IStudent extends IUser {
  firstName?: string;
  lastName?: string;

  avatar?: string;
}