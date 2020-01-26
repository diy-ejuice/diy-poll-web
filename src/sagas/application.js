import axios from 'axios';
import { all, call, takeLatest } from 'redux-saga/effects';

import { types } from 'reducers/application';

function* submitSurveyWorker({ answers }) {
  try {
    yield call(axios.post, `${API_URL}/survey`, {
      answers
    });
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}

export const workers = {
  submitSurveyWorker
};

function* submitSurveyWatcher() {
  yield takeLatest(types.SUBMIT_SURVEY, submitSurveyWorker);
}

export const watchers = {
  submitSurveyWatcher
};

export default function* saga() {
  yield all(Object.values(watchers).map(watcher => watcher()));
}
