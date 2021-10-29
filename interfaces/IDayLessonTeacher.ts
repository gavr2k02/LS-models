import { ILesson } from './ILesson';
import { ILessonTeacher } from './ILessonTeacher';

export interface IDayLessonTeacher {
  id?: string;
  date: string;
  dateMS?: number;
  lessons?: ILessonTeacher[];
}
