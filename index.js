var express = require('express');
var app = express();

// serving static file
app.use(express.static('public'));

// basic routing
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// API endpoint
app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});

// if request to API is empty return current time
app.get("/api", (req, res) => {
  let date = new Date();
  let unix = date.getTime();
  let utc = date.toUTCString();
  res.json({ unix, utc });
});

// timestamp API
app.get("/api/:date", (req, res) => {
  // receiving date with get parameter 
  let timeParam = req.params.date;
  let date;

  // check format of the parameter
    if (!isNaN(timeParam)) {
      date = new Date(Number(timeParam));
    } else {
      date = new Date(timeParam);
    }

  // check format of a timestamp
  if (date == 'Invalid Date') {
    res.json({ error : "Invalid Date" });
  } else {
    const unix = date.getTime();
    const utc = date.toUTCString();
    res.json({ unix, utc });
  }
});

// listen for requests
var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
