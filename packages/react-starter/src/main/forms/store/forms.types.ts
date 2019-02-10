import {LoadUser, SaveUser, SaveUserError, SaveUserSuccess} from './forms.actions'

export type FormsAction =
  LoadUser
  | SaveUser
  | SaveUserSuccess
  | SaveUserError

export enum FormsActionKeys {
  LOAD_USER = 'forms/LOAD_USER',
  SAVE_USER = 'forms/SAVE_USER',
  SAVE_USER_SUCCESS = 'forms/SAVE_USER_SUCCESS',
  SAVE_USER_ERROR = 'forms/SAVE_USER_ERROR',
}

export type FormsState = {
  users: { [key: string]: User },
  currentUser: User | null,
}

export interface Address {
  street?: string,
  city?: string,
  zipCode: string,
  country: string,
}

export interface User {
  id: string,
  name: string,
  email: string,
  lastModified: Date,
  addresses: Address[],
}
