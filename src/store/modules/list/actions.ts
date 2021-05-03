import {IListState} from './types';

export function searchShow(search: IListState) {
  return {
    type: 'SEARCH_SHOWS',
    payload: {
      search,
    },
  };
}
