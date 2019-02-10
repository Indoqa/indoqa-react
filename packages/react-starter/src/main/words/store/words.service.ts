import {AjaxCreationMethod} from 'rxjs/internal-compatibility'
import {Observable} from 'rxjs/internal/Observable'

const createWordsUrl = (prefix: string) => {
  return '/words/v4/words.json/search/' +
    prefix +
    '?caseSensitive=false' +
    '&minCorpusCount=5' +
    '&maxCorpusCount=-1' +
    '&minDictionaryCount=1' +
    '&maxDictionaryCount=-1' +
    '&minLength=1' +
    '&maxLength=-1' +
    '&skip=0' +
    '&limit=5' +
    '&api_key=966a26e2e28f6ce972d600ff0fa0293908a2661d3f407c2db'
}

interface SearchResults {
  word: string,
}

export interface WordsServiceResult {
  searchResults: SearchResults[]
}

export const wordsService$ = (ajax: AjaxCreationMethod, prefix: string): Observable<WordsServiceResult> => {
  return ajax.getJSON<WordsServiceResult>(createWordsUrl(prefix))
}
