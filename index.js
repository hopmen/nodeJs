const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const userRoute = require('./routes/User');
const carRoute = require('./routes/Car');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(userRoute);
app.use(carRoute);




app.listen(port, () => {
});
