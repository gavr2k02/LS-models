import { IBaseCard } from './IBaseCard';
import { ICourse } from './ICourse';

export interface IPreset extends IBaseCard {
  courseId: string;
  course?: ICourse;
  userId?: string;
  cardsIds: string[];
}
