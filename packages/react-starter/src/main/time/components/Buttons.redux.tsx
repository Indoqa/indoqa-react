import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import Types from 'Types'
import {clear, fetchTime, fetchTimes} from '../store/time.actions'
import Buttons, {ButtonDispatchProps} from './Buttons'

const VIENNA_COORDINATES = {lon: 10, lat: 47}
const NEW_YORK_COORDINATES = {lon: -74.0059700, lat: 40.7142700}
const INVALID_COORDINATES = {lon: -1000, lat: -1000}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): ButtonDispatchProps => ({
  loadVienna: () => {
    dispatch(fetchTime(VIENNA_COORDINATES))
  },
  loadNewYork: () => {
    dispatch(fetchTime(NEW_YORK_COORDINATES))
  },
  loadViennaAndNewYork: () => {
    dispatch(fetchTimes([
      VIENNA_COORDINATES,
      NEW_YORK_COORDINATES,
    ]))
  },
  loadInvalidLocation: () => {
    dispatch(fetchTime(INVALID_COORDINATES))
  },
  clear: () => {
    dispatch(clear())
  },
})

export default connect<{}, ButtonDispatchProps>(null, mapDispatchToProps)(Buttons)
