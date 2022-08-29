// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});

// timestamp API
app.get("/api/:date", (req, res) => {
  // recieving date with get parameter 
  let timeParam = req.params.date;
  let date;

  // check format of the parameter
  if (timeParam) {
    if (!isNaN(timeParam)) {
      date = new Date(Number(timeParam));
    } else {
      date = new Date(timeParam);
    }
  } else {
    // generate current timestamp if parameter is empty
    date = new Date();
  }

  // check format of a timestamp
  if (date === 'Invalid Date') {
    res.json({ error: "Invalid date"});
  } else {
    const unixTime = date.getTime();
    const utcTime = date.toUTCString();
    res.json({ unixTime, utcTime });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
