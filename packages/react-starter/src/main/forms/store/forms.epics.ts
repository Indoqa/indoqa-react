import {Epic, ofType} from 'redux-observable'
import {Observable} from 'rxjs/internal/Observable'
import {of} from 'rxjs/internal/observable/of'
import {mergeMap} from 'rxjs/operators'
import shortid from 'shortid'

import Types from 'Types'
import {SaveUser, saveUserError, saveUserSuccess} from './forms.actions'
import {FormsAction, FormsActionKeys} from './forms.types'

interface FormsEpic extends Epic<Types.RootAction, FormsAction, Types.RootState, Types.Services> {}

const doSaveForm = (action: SaveUser, history: any): Observable<FormsAction> => {
  const {user, setErrors} = action

  // simulate a server-side validation
  if (user.name.startsWith('G')) {
    // store the validation error into the form
    setErrors({name: 'Names starting with \'G\' are not allowed.'})
    return of(saveUserError())
  }

  // go back to users lists
  history.push('/forms/users/')

  // its a new user -> create an id
  if (user.id === '') {
    user.id = shortid()
  }

  return of(saveUserSuccess(user))
}

const fetchWordsEpic$: FormsEpic = (action$, state, {history}) =>
  action$.pipe(
    ofType<SaveUser>(FormsActionKeys.SAVE_USER),
    mergeMap((action) => doSaveForm(action, history)),
  )

export default [fetchWordsEpic$]
