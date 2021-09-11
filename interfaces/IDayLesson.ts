import { ILesson } from './ILesson';

export interface IDayLesson {
  groupId: string;
  day: Date;
  lessons: ILesson[];
}
