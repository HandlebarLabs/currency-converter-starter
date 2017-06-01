import { combineReducers } from 'redux';

import currencies from './currencies';
import theme from './theme';

export default combineReducers({
  currencies,
  theme,
});
