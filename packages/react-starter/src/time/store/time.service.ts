import {AjaxCreationMethod} from 'rxjs/internal-compatibility'
import {Observable} from 'rxjs/internal/Observable'
import {Result} from './time.types'

const createGeonamesUrl = (lon: number, lat: number) => {
  if (lon === -1000) {
    return '/geonames/non-existing-path'
  }
  return `/geonames/timezoneJSON?formatted=true&lng=${lon}&lat=${lat}&username=indoqa_react_redux&style=full`
}

export const geonamesService$ = (ajax: AjaxCreationMethod, lon: number, lat: number): Observable<Result> => {
  return ajax.getJSON<Result>(createGeonamesUrl(lon, lat))
}
