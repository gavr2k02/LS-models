import { ILesson } from './ILesson';

export interface IDayLesson {
  facultyId: string;
  groupId: string;
  day: Date;
  lessons?: ILesson[];
}
