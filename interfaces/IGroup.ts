import { IBaseCard } from './IBaseCard';
import { IFaculty } from './IFaculty';

export interface IGroup extends IBaseCard {
  facultyId: string;
  faculty?: IFaculty;
  studentIds?: string[];
}
