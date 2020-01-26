import { buildActions } from 'utils';

export const types = buildActions('application', ['INIT_APP', 'SUBMIT_SURVEY']);

const initApp = () => ({
  type: types.INIT_APP
});

const submitSurvey = (id, answers) => ({
  type: types.SUBMIT_SURVEY,
  answers,
  id
});

export const actions = {
  initApp,
  submitSurvey
};

export const initialState = {};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
