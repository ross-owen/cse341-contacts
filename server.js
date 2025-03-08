const express = require('express');
const mongo = require('./data');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes/index'));

mongo.init((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => console.log(`DB live. Listening on port: ${port}`));
    }
})

