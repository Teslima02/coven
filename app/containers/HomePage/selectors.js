/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectGetCities = () =>
  createSelector(
    selectHome,
    homeState => homeState.getCities,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

const makeSelectFlightDialog = () =>
  createSelector(
    selectHome,
    homeState => homeState.flightDialog,
  );

const makeSelectDepartingData = () =>
  createSelector(
    selectHome,
    homeState => homeState.departingData,
  );

const makeSelectArrivingData = () =>
  createSelector(
    selectHome,
    homeState => homeState.arrivingData,
  );

export {
  selectHome,
  makeSelectGetCities,
  makeSelectLoading,
  makeSelectError,
  makeSelectFlightDialog,
  makeSelectDepartingData,
  makeSelectArrivingData,
};
