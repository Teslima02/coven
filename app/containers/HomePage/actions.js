import {
  LOAD_CITIES,
  LOAD_CITIES_SUCCESS,
  LOAD_CITIES_ERROR,
  OPEN_FLIGHT_DIALOG,
  CLOSE_FLIGHT_DIALOG,
  LOAD_DEPARTING_FLIGHT,
  LOAD_DEPARTING_FLIGHT_SUCCESS,
  LOAD_DEPARTING_FLIGHT_ERROR,
  LOAD_ARRIVING_FLIGHT,
  LOAD_ARRIVING_FLIGHT_SUCCESS,
  LOAD_ARRIVING_FLIGHT_ERROR,
} from './constants';

export function loadCities() {
  return {
    type: LOAD_CITIES,
  };
}

export function loadCitiesSuccess(data) {
  return {
    type: LOAD_CITIES_SUCCESS,
    payload: data,
  };
}

export function loadCitiesError(data) {
  return {
    type: LOAD_CITIES_ERROR,
    payload: data,
  };
}

export function openFlightDialog(data) {
  return {
    type: OPEN_FLIGHT_DIALOG,
    payload: data,
  };
}

export function closeFlightDialog() {
  return {
    type: CLOSE_FLIGHT_DIALOG,
  };
}

export function loadDepartingFlights(data) {
  return {
    type: LOAD_DEPARTING_FLIGHT,
    payload: data,
  };
}

export function loadDepartingFlightsSuccess(data) {
  return {
    type: LOAD_DEPARTING_FLIGHT_SUCCESS,
    payload: data,
  };
}

export function loadDepartingFlightsError(data) {
  return {
    type: LOAD_DEPARTING_FLIGHT_ERROR,
    payload: data,
  };
}

export function loadArrivingFlights(data) {
  return {
    type: LOAD_ARRIVING_FLIGHT,
    payload: data,
  };
}

export function loadArrivingFlightsSuccess(data) {
  return {
    type: LOAD_ARRIVING_FLIGHT_SUCCESS,
    payload: data,
  };
}

export function loadArrivingFlightsError(data) {
  return {
    type: LOAD_ARRIVING_FLIGHT_ERROR,
    payload: data,
  };
}