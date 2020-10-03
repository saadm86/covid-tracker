

const url = "https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true"
export const Api = async () => {
    const json = await(fetch(url))
    const response = await json.json()
    const active = response.infected-(response.recovered+response.deceased)
    const fatalityRate = ((response.deceased/response.infected)*100)
    const modifiedData = {
        infected: response.infected,
        recovered: response.recovered,
        critical: response.critical,
        deceased: response.deceased,
        active: active,
        fatality_rate: fatalityRate
    }
    return(
    modifiedData
    )
}
