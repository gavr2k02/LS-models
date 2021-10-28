import { ILesson } from './ILesson';

export interface IDayLesson {
  id?: string;
  facultyId: string;
  date: string;
  dateMS?: number;
  lessons?: ILesson[];
}
