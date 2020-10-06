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
        overflowWrap: "break-word",
        color: '#302C2D',
        
    },
  }));

export const Cards = () => {
    const [countryVal, setCountryVal] = useState("World")
    const [globalCont, setGlobalCont] = useState([])

    const classes = useStyles();

    useEffect(() => {
        const getData = async() => {
        const getCountryData = await(globalApi())
        const [countryData] = getCountryData.filter(key=>key.country===countryVal)
        const finalCountryData = {
            cases:countryData.cases,
            recovered:countryData.recovered,
            deaths:countryData.deaths,
            active:countryData.active,
            today_Cases:countryData.todayCases,
            today_Deaths:countryData.todayDeaths,
            critical:countryData.critical,
            cases_Per_One_Million:countryData.casesPerOneMillion,
            deaths_Per_One_Million:countryData.deathsPerOneMillion,
        }
        setGlobalCont(finalCountryData)
        }
        getData()
    },[countryVal])
 
    const countryCallBack = (country) =>{
        setCountryVal(country)
    }
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="space-evenly">
            {Object.keys(globalCont).map((val, i) => {
                return (
                <Grid item sm={4} xs={6} key={i}>
                <Paper className={classes.paper} >
                    <h3>{val.replace(/_/g," ").toUpperCase()}</h3>
                    <h2><CountUp end={globalCont[val]} duration={2} separator=","/></h2>
                </Paper>
                </Grid>
                )
            })}
            </Grid>
            <Countrypicker countryCallBack={countryCallBack}/>
        </div>
    )
}
