/* eslint-disable @typescript-eslint/no-unused-vars */
import {Reducer} from 'redux';
import {IListState} from './types';

const INITIAL_STATE: IListState = {
  items: [],
};

const list: Reducer<IListState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_SHOWS': {
      const {search} = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            search,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
};

export default list;
