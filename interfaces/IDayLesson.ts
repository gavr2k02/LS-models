import { ILesson } from './ILesson';

export interface IDayLesson {
  id?: string;
  facultyId: string;
  groupId: string;
  date: string;
  dateMS?: number;
  lessons?: ILesson[];
  deleted?: boolean;
}
