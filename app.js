const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const { body, matchedData, validationResult } = require('express-validator'); //lyft ut body o validationsres från det som kommer tillbaka från require. validationresult ger oss alla fel.
//matchedData 

const routes = require('./routes'); //samma som './routes/index'


// instantiate express
const app = express();

// middlewares
app.use(logger('dev'));
app.use(cors());                    //för att andra webbsidor ska kunna använda det här api:et
app.use(express.json());  //tar textsträng med data och gör om till javascript - här kommer vi åt bodys innehåll
app.use(express.urlencoded({ extended: false }));       //om vi behöver skicka in ett formulär

app.post('/test', [
    body('name').exists().isLength({min: 3}), //regler att validera mot
    body('address').exists().isString().trim().isLength({min: 6, max: 50}), //måste vara en sträng och sedan trimmar vi bort mellanslag. istället för exists kan vi ha .optional

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ status: 'fail', data: errors.array() });
    }

    const validData = matchedData(req); //kollar så att vi får ut just den datan som vi har validerat

    res.send({ status: 'success', data: validData})
});

// routes
app.use(routes);


module.exports = app;
