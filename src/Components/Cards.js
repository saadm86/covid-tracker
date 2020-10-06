import React, { useEffect, useState } from 'react'
import {Countrypicker} from './CountryPicker'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {globalApi} from './Api'
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

export const Cards = () => {
    const [countryVal, setCountryVal] = useState("World")
    const [globalCont, setGlobalCont] = useState([])

    const classes = useStyles();

    useEffect(() => {
        const getData = async() => {
        const getCountryData = await(globalApi())
        const countryData = getCountryData.filter(key=>key.country===countryVal)
        const [finalCountryData] = countryData
        setGlobalCont(finalCountryData)
        }
        getData()
    },[countryVal])
    console.log(Object.keys(globalCont))
    const countryCallBack = (country) =>{
        setCountryVal(country)
    }
    
    return (
        <div className={classes.root}>
            {Object.keys(globalCont).map((val, i) => {
                return (
                <Grid container spacing={3}>
                <Grid item sm={3} xs={6}>
                <Paper className={classes.paper} key={i}>
                    <h3>{val.toUpperCase()}</h3>
                    <h2><CountUp end={globalCont[val]} duration={2} separator=","/></h2>
                </Paper>
                
                </Grid>
            </Grid>
                )
            })}
            
            <Countrypicker countryCallBack={countryCallBack}/>
        </div>
    )
}
