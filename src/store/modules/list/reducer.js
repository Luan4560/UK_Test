import {GET_INFO, GET_INFO_REQUEST, GET_INFO_SUCCESS} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  list: [],
  error: null,
};

const list = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_INFO_REQUEST:
      return {
        isLoading: true,
        ...state,
        list: [],
      };

    case GET_INFO_SUCCESS:
      // console.log(JSON.stringify(action.payload, null, 2));

      return {
        isLoading: false,
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default list;
