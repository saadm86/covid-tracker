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
        const fetchedCountry = async()=>{
            const countryName = await(globalApi())
            setCountry(countryName.map(country=>country.country))
        }
        fetchedCountry()
    }, [])
    
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="Country Selector">World</InputLabel>
                <NativeSelect defaultValue = {"World"} onChange={( e => countryCallBack(e.target.value))}>
                <option aria-label="None" value="" />
                {country.map((key, id) => <option value={key} key={id}>{key}</option>)}
                </NativeSelect>
            <FormHelperText>Please choose a Country from the drop down</FormHelperText>
            </FormControl>
        </div>
    )
}
