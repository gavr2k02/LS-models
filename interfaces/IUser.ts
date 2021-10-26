import { Role } from '../enums/Role';
import { IBaseCard } from './IBaseCard';

export interface IUser extends IBaseCard {
  clientId: string;
  role: Role;
  fields?: IFIelds;
}

export interface IFIelds {
  email?: string;
  phone?: string;
}
