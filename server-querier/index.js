const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

const connect = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        );
        console.log("connected DB");
    } catch (err) {
        console.log('Mongoose connection error :' + err);
    }
};
connect();

// allow cross-origin requests
app.use(cors());

app.use(express.json());
app.use( '/', routes);
// app.use(body.json);

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});