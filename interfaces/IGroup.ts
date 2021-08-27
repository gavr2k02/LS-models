import { IBaseCard } from './IBaseCard';

export interface IGroup extends IBaseCard {
  facultyId: string;
  studentIds?: string[];
}
