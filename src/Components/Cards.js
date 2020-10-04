import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Api} from './Api'
import CountUp from 'react-countup';
import './../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#302C2D',
    backgroundColor: '#E8E8E8'
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
      {Object.keys(data).map((key1, id) => {
          return(
            <Grid item sm={3} xs={6}  key={id}>
            <Paper className={classes.paper} elevation={3} id={key1}>
                <h3>{key1.toUpperCase()}</h3>
                <h2><CountUp end={data[key1]} duration={2} separator=","/></h2>
            </Paper>
            </Grid>
          )
          })}
      </Grid>
    </div>
  );
}
