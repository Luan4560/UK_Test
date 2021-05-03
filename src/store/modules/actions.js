export const GET_INFO_REQUEST = 'GET_INFO';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAILED = 'GET_INFO_FAILED';

export const getInfoRequest = ({search}) => ({
  type: GET_INFO_REQUEST,
  payload: {search},
});

export const getInfoSuccess = payload => ({
  type: GET_INFO_SUCCESS,
  payload,
});

export const getInfoFailed = payload => ({
  type: GET_INFO_FAILED,
  payload,
});
