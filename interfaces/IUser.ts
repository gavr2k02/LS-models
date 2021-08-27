import { Role } from '../enums/Role';

export interface IUser {
  id: string;
  name: string;
  cid: string;
  role: Role;
  fields: IFIelds;
}

export interface IFIelds {
  email?: string;
  phone?: string;
}
