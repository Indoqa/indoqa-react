import {createSelector} from 'reselect'
import {selectFormsState} from '../../app/selectors'
import {FormsState} from './forms.types'

export const selectUsers = createSelector(selectFormsState, (state: FormsState) => state.users)
export const selectCurrentUser = createSelector(selectFormsState, (state: FormsState) => state.currentUser)
