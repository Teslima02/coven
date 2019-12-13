import produce from 'immer';
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

// The initial state of the App
export const initialState = {
  departingData: {},
  arrivingData: {},
  getCities: [],
  getDeparts: [],
  getArrivals: [],
  loading: false,
  error: false,
  flightDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CITIES: {
        return {
          loading: true,
          error: false,
        };
      }
      case LOAD_CITIES_SUCCESS: {
        return {
          loading: false,
          error: false,
          getCities: action.payload,
        };
      }
      case LOAD_CITIES_ERROR: {
        return {
          loading: false,
          error: true,
        };
      }
      case OPEN_FLIGHT_DIALOG: {
        return {
          ...state,
          flightDialog: {
            type: 'new',
            props: {
              open: true,
            },
            data: action.payload,
          },
        };
      }
      case CLOSE_FLIGHT_DIALOG: {
        return {
          ...state,
          flightDialog: {
            type: 'new',
            props: {
              open: false,
            },
            data: null,
          },
        };
      }
      case LOAD_DEPARTING_FLIGHT: {
        return {
          loading: true,
          error: false,
          departingData: action.payload,
        };
      }
      case LOAD_DEPARTING_FLIGHT_SUCCESS: {
        return {
          loading: false,
          error: false,
          getDeparts: action.payload,
        };
      }
      case LOAD_DEPARTING_FLIGHT_ERROR: {
        return {
          loading: false,
          error: true,
        };
      }
      case LOAD_ARRIVING_FLIGHT: {
        return {
          loading: true,
          error: false,
          getArrivals: action.payload,
        };
      }
      case LOAD_ARRIVING_FLIGHT_SUCCESS: {
        return {
          loading: false,
          error: false,
          getCities: action.payload,
        };
      }
      case LOAD_ARRIVING_FLIGHT_ERROR: {
        return {
          loading: false,
          error: true,
        };
      }
    }
  });

export default homeReducer;
