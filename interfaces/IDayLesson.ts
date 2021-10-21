import { ILesson } from './ILesson';

export interface IDayLesson {
  id?: string;
  facultyId: string;
  groupId: string;
  day: string;
  lessons?: ILesson[];
  deleted?: boolean;
}
