const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// for fcc tests
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));


app.use(express.static('build'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

function getDate(time) {
    let date;
    if (time) {
        date = new Date(time);
    } else {
        date = new Date();
    }

    const unix = date.getTime();
    const utc = date.toUTCString();

    return { date, unix, utc };
}

app.get('/api/', (req, res) => {
    const { unix, utc } = getDate();
    res.json({ "unix": unix, "utc": utc });
});

app.get('/api/:date', (req, res) => {

    let time = req.params.date;
    if (Number(time)) {
        time = Number(time);
    }


    const { date, unix, utc } = getDate(time);

    if (date instanceof Date && !isNaN(date)) {
        res.json({ "unix": unix, "utc": utc });
    } else {
        res.json({ error: date.toString() });
    }
});


app.listen(PORT, console.log('app listening on:', PORT));