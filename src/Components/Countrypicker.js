import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const url = "https://coronavirus-19-api.herokuapp.com/countries"
export const Api = async() => {
        const response1 = await(fetch(url))
        const finalResposne1 = await response1.json()
        return(
            finalResposne1.map((country) => ({country: country.country, cases: country.cases}))
        )
    }    
 
const url2 = "https://coronavirus-19-api.herokuapp.com/countries"

export const Api2 = async () => {
    const response = await(fetch(url2))
    const finalResposne = await response.json()
    return(
    (finalResposne.map(country=>country.country))
    )
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects({finalFinalData}) {
    const [getGlobalData, setGetGlobalData] = useState([])
    useEffect(() => {
       const getGlobalData = async () => {
        const country = await(Api())
        setGetGlobalData(country)
       } 
       getGlobalData()   
    }, [])
    
    const [data, setData] = useState([])
    useEffect(() => {
       const getData = async () => {
        const country1 = await(Api2())
        setData(country1)
       } 
       getData()   
    }, [setData])
  
  const [pickCountry, setPickCountry] = useState('World')
  const handleChange = e => setPickCountry(e.target.value);
  const finalData = getGlobalData.filter(key=>key.country===pickCountry)
  finalFinalData(finalData)
  
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="country-picker">Please Choose a Country</InputLabel>
        <NativeSelect defaultValue= "" onChange={handleChange}>
        {data.map ((country, i) => <option value={country} key={i}>{country}</option>)} 
        </NativeSelect>
        <FormHelperText>Select a Country to view data</FormHelperText>
      </FormControl>
    </div>
  );
}
