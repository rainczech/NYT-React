const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express ();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// static assets
if (process.env.Node_ENV === "production"){
    app.use(express.static("client/built"));
}

app.use(routes);

// MongoDBb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytarticles");

// API Server
app.listen(PORT, function() {
    console.log(`API server now listening on PORT ${PORT}`);
})