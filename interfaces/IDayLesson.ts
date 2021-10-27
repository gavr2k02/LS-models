import { ILesson } from './ILesson';

export interface IDayLesson {
  id?: string;
  facultyId: string;
  groupId: string;
  date: number;
  lessons?: ILesson[];
  deleted?: boolean;
}
