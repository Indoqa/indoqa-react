import 'rxjs'
import IndoqaApplication from './IndoqaApplication.react'
import _enableHotReloading from './enableHotReloading'
import _createReduxStore from './createReduxStore'

export default IndoqaApplication

export const createReduxStore = _createReduxStore
export const enableHotReloading = _enableHotReloading
