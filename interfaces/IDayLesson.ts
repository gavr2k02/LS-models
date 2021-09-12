import { ILesson } from './ILesson';

export interface IDayLesson {
  id?: string;
  facultyId: string;
  groupId: string;
  day: Date;
  lessons?: ILesson[];
  deleted?: boolean;
}
