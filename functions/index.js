const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KFQiaSJ6QE2coyRSGtcq1GDWLKh3YO8lwKhqESxL2hLdBQyubrlADE6mvXlAvpGRQfpZaVKZYyWdOvCEntQ3iKr00gDMfsqwY')

// Api 

// App config
const app = express();

//Middlewares 
app.use(cors({ origin: true }));
app.use(express.json());

// API routes 
app.get("/", (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    // OK - created 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command 
exports.api = functions.https.onRequest(app);
