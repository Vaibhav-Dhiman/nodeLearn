const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=f3c6ec90b6ec8361cd59798f0f8cd19b&query=new%20delhi'

request({url: url, json: true}, (error, response) => {
   // console.log(response.body.current)
    const currentTemp = response.body.current.temperature
    const feelsTemp =  response.body.current.feelslike
    //console.log(response.body.current.weather_descriptions[0] + '. It is currently ' +currentTemp+ ' degree out but feels like '+ feelsTemp + ' degree')
})


const grocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFpYmhhdjc4NiIsImEiOiJja2JlbmFkZmgwbmluMnZvMjRteXcycTFxIn0.qImhSnWzhunNkuIcY2J1wA&limit=1'

request({url: grocodeUrl, json: true}, (error, response) => {
   const lat = response.body.features[0].center[1]
   const lon = response.body.features[0].center[0]

   console.log(lat, lon)
 })