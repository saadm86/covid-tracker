
const url = "https://coronavirus-19-api.herokuapp.com/countries"
export const Api = async () => {
    const response1 = await(fetch(url))
    const finalResposne1 = await response1.json()
    return(
    finalResposne1.map((country) => ({country: country.country, cases: country.cases})))}

const url2 = "https://coronavirus-19-api.herokuapp.com/countries"

export const Api2 = async () => {
    const response = await(fetch(url2))
    const finalResposne = await response.json()
    return(
    finalResposne.map(country=>country.country)
    )
}