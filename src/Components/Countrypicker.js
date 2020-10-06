import React, {useEffect, useState} from 'react'
import {globalApi} from './Api'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const Countrypicker = ({countryCallBack}) => {
    const classes = useStyles();

    let [country, setCountry] = useState([])
    useEffect(() => {
        const fetchedData = async()=>{
            const countryData = await(globalApi())
            setCountry(countryData.map(country=>country.country))
        }
        fetchedData()
    }, [])
    
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="Country Selector">Country</InputLabel>
                <NativeSelect onChange={( e => countryCallBack(e.target.value))}>
                <option aria-label="None" value="" />
                {country.map((key, id) => <option value={key} key={id}>{key}</option>)}
                </NativeSelect>
            <FormHelperText>Please choose a Country from the drop down</FormHelperText>
            </FormControl>
        </div>
    )
}
