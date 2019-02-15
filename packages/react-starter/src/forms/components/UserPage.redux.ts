import {connect} from 'react-redux'
import {loadUser, saveUser} from '../store/forms.actions'
import {createNewUser} from '../store/forms.factory'
import {selectCurrentUser} from '../store/forms.selectors'

import {FormsState} from '../store/forms.types'
import UserPage from './UserPage'

const mapDispatchToProps = {loadUser, saveUser}

const mapStateToProps = (state: FormsState) => ({
  user: selectCurrentUser(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

const mapStateToPropsAddUser = () => ({
  user: createNewUser(),
})

export const AddUserPage = connect(mapStateToPropsAddUser, mapDispatchToProps)(UserPage)
