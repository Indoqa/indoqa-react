import produce from 'immer'
import {FormsAction, FormsActionKeys, FormsState, User} from './forms.types'

const user1: User = {
  id: 'HyJifGwFG',
  name: 'Maier',
  email: 'w.maier@example.com',
  addresses: [
    {
      street: 'Schottenring 3',
      city: 'Vienna',
      zipCode: '1010',
      country: 'Austria',
    },
    {
      street: 'Schönaugürtel 7',
      city: 'Graz',
      zipCode: '8010',
      country: 'Austria',
    },
  ],
  lastModified: new Date(),
}

const user2: User = {
  id: 'r1rozfvFf',
  name: 'Gruber',
  email: 'f.gruber@example.com',
  addresses: [],
  lastModified: new Date(),
}

const initialState: FormsState = {
  users: {
    [user1.id]: user1,
    [user2.id]: user2,
  },
  currentUser: null,
}

export default (state: FormsState = initialState, action: FormsAction): FormsState => {
  return produce(state, (draft: FormsState) => {
    switch (action.type) {
      case FormsActionKeys.SAVE_USER_SUCCESS:
        const {user} = action
        const userId = user.id
        draft.users[userId] = user
        draft.users[userId].lastModified = new Date()
        draft.currentUser = null
        return
      case FormsActionKeys.LOAD_USER:
        draft.currentUser = state.users[action.id]
        return
    }
  })
}
