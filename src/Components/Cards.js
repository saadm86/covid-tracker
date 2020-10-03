import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Api} from './Api'
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'lightblue'
    
  },
}));

export default function CenteredGrid() {

    const [data, setData] = useState({})  
    useEffect(() => {
        const getData = async()=>{
            const finalData = await(Api())
            setData(finalData)
        }
        getData()
    }, [])
        
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
      {Object.keys(data).map((key, id) => {
          return(
            <Grid item sm={4} xs={3}  key={id}>
            <Paper className={classes.paper} elevation={3}>
                <h3>{key.toUpperCase()}</h3>
                <h2><CountUp end={data[key]} duration={2} separator=","/></h2>
            </Paper>
            </Grid>
          )
          })}
      </Grid>
    </div>
  );
}
