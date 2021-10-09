import { Role } from '../enums/Role';

export interface ILoginPassword {
  name: string;
  password: string;
  cid: string;
  role: Role;
}
