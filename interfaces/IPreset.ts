import { IBaseCard } from './IBaseCard';
import { IFaculty } from './IFaculty';

export interface IPreset extends IBaseCard {
  facultyId: string;
  faculty?: IFaculty;
  cardsIds: string[];
}
