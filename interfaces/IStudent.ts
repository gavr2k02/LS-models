import { IGroup } from './IGroup';
import { IUser } from './IUser';

export interface IStudent extends IUser {
  firstName?: string;
  lastName?: string;

  groupId: string;
  group?: IGroup;
}
