import { Role } from '../enums/Role';

export interface ISignUpPaasword {
  name: string;
  password: string;
  cid: string;
  role: Role;
}
