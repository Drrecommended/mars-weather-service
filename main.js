
// Nasa API
const apiKey = "He6Tx5dxSGHnHohdNq76tBE9aI6wMZSrWebnMNMx";
let apiUrl = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`






// API request to get Mars weather
async function getMarsPictures() {
    try {
      const response = await fetch(apiUrl);
      resultsArray = await response.json();
      console.log(resultsArray)
    } catch (error) {
      //catch error
    }
  }

  getMarsPictures()