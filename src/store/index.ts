import {createStore} from 'redux';
import {IListItem} from './modules/list/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  list: IListItem;
}

const store = createStore(rootReducer);

export default store;
