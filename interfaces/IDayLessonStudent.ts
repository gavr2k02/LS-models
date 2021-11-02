import { ILessonStudent } from './ILessonStudent';

export interface IDayLessonStudent {
  id?: string;
  date: string;
  dateMS?: number;
  lessons?: ILessonStudent[];
}
