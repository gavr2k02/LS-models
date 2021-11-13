import { IChatMessage } from './IChatMessage';

export interface IChat {
  id: string;
  createdAt: number;
  messagesIds: string[];
  messages?: IChatMessage[];
  deleted?: boolean;
}
