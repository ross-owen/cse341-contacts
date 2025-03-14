const express = require('express');
const cors = require('cors');
const mongo = require('./data');
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

app
    .use(cors())
    .use(bodyParser.json())
    .use('/', require('./routes'));

mongo.init((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => console.log(`DB live. Listening on port: ${port}`));
    }
})

