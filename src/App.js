import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

const App=() =>{
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{height:"100vh"}}>
        <Grid items xs={12} sm={4} className={classes.mobile}>
          <Details title="Income"/>
        </Grid>
        <Grid items xs={12} sm={3} className={classes.main}>
          <Main/>
        </Grid>
        <Grid items xs={12} sm={3} className={classes.desktop}>
          <Details title="Income"/>
        </Grid>
        <Grid items xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
