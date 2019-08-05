const secret = process.env.KEY,
  axios = require('axios'),
  baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const weatherNow = async (req, res) => {
  const loc = req.body.location || 'San%20Francisco';
  const url = baseUrl + `?q=${loc}` + `&APPID=${secret}`
  const response = await axios.get(url)

  res.send(response.body)
};

module.exports = { weatherNow }