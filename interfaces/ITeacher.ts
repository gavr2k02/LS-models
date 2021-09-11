import { IUser } from './IUser';

export interface ITeacher extends IUser {
  firstName?: string;
  lastName?: string;

  avatar?: string;
  facultyIds?: string[];
  courseIds?: string[];
}
