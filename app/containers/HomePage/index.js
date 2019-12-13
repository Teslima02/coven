/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  CssBaseline,
  Typography,
  Grid,
  makeStyles,
  Card,
  CardContent,
  List,
  Button,
} from '@material-ui/core';
import * as Actions from './actions';
import * as Selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from '../../components/LoadingIndicator';
import FlightDialog from './components/FlightDialog';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const key = 'home';

export function HomePage(props) {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const {
    dispatchLoadCitiesAction,
    getCities,
    loading,
    error,
    dispatchOpenFlightAction,
    dispatchDepartingAction,
  } = props;

  useEffect(() => {
    dispatchLoadCitiesAction();
  }, []);

  const countryArr = [];
  let count = 0;
  const result = [];

  if (getCities) {
    for (let i = 0; i < getCities.length; i++) {
      if (countryArr.includes(getCities[i][2]) === false) {
        countryArr.push(getCities[i][2]);
        result.push(getCities[i]);
        count++;

        if (count === 10) {
          break;
        }
      }
    }
  }

  console.log(result, 'result 2');

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>

      <div className={classes.root}>
        <Grid container spacing={3}>
          {result.map((data, index) => (
            <Grid item xs={12} md={3} lg={3} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Button
                    size="small"
                    onClick={() => dispatchOpenFlightAction(data[2])}
                    // dispatchDepartingAction(data[2]))
                  >
                    {data[2]}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <FlightDialog />
    </React.Fragment>
  );
}

HomePage.propTypes = {
  dispatchLoadCitiesAction: PropTypes.func,
  dispatchOpenFlightAction: PropTypes.func,
  getCities: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  getCities: Selectors.makeSelectGetCities(),
  loading: Selectors.makeSelectLoading(),
  error: Selectors.makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatchDepartingAction: evt => dispatch(Actions.loadDepartingFlights(evt)),
    dispatchLoadCitiesAction: () => dispatch(Actions.loadCities()),
    dispatchOpenFlightAction: evt => dispatch(Actions.openFlightDialog(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
