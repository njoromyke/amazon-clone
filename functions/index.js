const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51H3yTiGsdClr3nAxZfRoJbQNZWHp160IEl9KbEtHFtYOYTdB7Z4wzAC2WUOFwOeVl1jD91QzL1oNvjJKZxgMe55G00G7UbaA1p"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
