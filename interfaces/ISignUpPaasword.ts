import { Role } from '../enums/Role';

export interface ISignUpPaasword {
  name: string;
  password: string;
  clientId: string;
  role: Role;
}
