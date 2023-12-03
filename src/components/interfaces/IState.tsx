import { IContact } from './IContact';

export interface IState {
  contacts: IContact[];
  filter: string;
}
