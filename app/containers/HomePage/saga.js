import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';

import { BaseUrl } from '../../components/BaseUrl';
import * as Constants from './constants';
import * as Selectors from './selectors';
import * as Actions from './actions';

export function* getCities() {
  const requestURL = `${BaseUrl}/states/all`;
  const headers = new Headers();
  headers.append('Authorization', `Basic ${btoa(`${'demo'}:${'demo'}`)}`);

  try {
    const citiesResponse = yield call(request, requestURL, {
      method: 'GET',
      headers,
    });

    yield put(Actions.loadCitiesSuccess(citiesResponse.states));
  } catch (err) {
    console.log(err, 'error citiesResponse');
    yield put(Actions.loadCitiesError(err));
  }
}

// export function* departCall() {
//   const departData = yield select(Selectors.makeSelectDepartingData());

//   console.log(departData, 'departData');
//   const requestURL = `${BaseUrl}/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800`;
//   const headers = new Headers();
//   headers.append('Authorization', `Basic ${btoa(`${'demo'}:${'demo'}`)}`);

//   try {
//     const newPostsRequ = yield call(request, requestURL, {
//       method: 'GET',
//       headers,
//     });

//     console.log(newPostsRequ, 'newPostsRequ');
//     // yield put(Actions.allPosts());
//     yield put(Actions.loadDepartingFlightsSuccess(newPostsRequ.data));
//   } catch (err) {
//     yield put(Actions.loadDepartingFlightsError(err));
//   }
// }


// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(Constants.LOAD_CITIES, getCities);
  // yield takeLatest(Constants.LOAD_DEPARTING_FLIGHT, departCall);
}
