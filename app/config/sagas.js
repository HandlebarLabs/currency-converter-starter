import { takeEvery } from 'redux-saga/effects';

import { CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, SWAP_CURRENCY } from '../actions/currencies';

const fetchLatestConversionRates = function* (action) {
  console.log('TODO: Update the things.', action);
  yield;
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
