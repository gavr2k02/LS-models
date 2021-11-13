export interface IChatMessage {
  id: string;
  chatId: string;
  userId: string;
  message: string;
  date: number;
  deleted?: boolean;
}
