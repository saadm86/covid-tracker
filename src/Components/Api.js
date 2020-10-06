const url = "https://coronavirus-19-api.herokuapp.com/countries"

export const globalApi = async() => {
    const jsonData = await(fetch(url))
    const fetchedData = await jsonData.json()
    
    return(
    fetchedData
    )
}