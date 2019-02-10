import {Action} from 'redux'
import {FormsActionKeys, User} from './forms.types'

export interface LoadUser extends Action {
  type: FormsActionKeys.LOAD_USER
  id: string,
}

export const loadUser = (id: string): LoadUser => ({
  type: FormsActionKeys.LOAD_USER,
  id,
})

// ----------------------------------------------------------------------------

export interface SaveUser extends Action {
  type: FormsActionKeys.SAVE_USER
  user: User,
  setErrors: any,
}

export const saveUser = (user: User, setErrors: any): SaveUser => ({
  type: FormsActionKeys.SAVE_USER,
  user,
  setErrors,
})

// ----------------------------------------------------------------------------

export interface SaveUserSuccess extends Action {
  type: FormsActionKeys.SAVE_USER_SUCCESS
  user: User,
}

export const saveUserSuccess = (user: User): SaveUserSuccess => ({
  type: FormsActionKeys.SAVE_USER_SUCCESS,
  user,
})

// ----------------------------------------------------------------------------

export interface SaveUserError extends Action {
  type: FormsActionKeys.SAVE_USER_ERROR
}

export const saveUserError = (): SaveUserError => ({
  type: FormsActionKeys.SAVE_USER_ERROR,
})
