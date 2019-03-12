import {createSelector} from 'reselect'

import {selectTimeState} from '../../app/selectors'
import {TimeState} from './time.types'

export const selectResults = createSelector(selectTimeState, (state: TimeState) => state.results)
export const selectError = createSelector(selectTimeState, (state: TimeState) => state.error)
export const selectLoadingFlag = createSelector(selectTimeState, (state: TimeState) => state.isLoading)
