import {createStore} from 'redux';
import reducers from '@redux-reducers';
const reduxStore = createStore(reducers);
export default reduxStore;
