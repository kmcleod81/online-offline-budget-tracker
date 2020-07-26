const mongoose = require("mongoose");
const transaction = require("/models/transaction");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true
});

var seed = [
    {
        name: "birthday",
        nalue: 20,
        date: new Date(Date.now())
    },
    {
        name: "tacos",
        nalue: -50,
        date: new Date(Date.now())
    },
    {
        name: "initial deposit",
        nalue: 100,
        date: new Date(Date.now())
    }
];

transaction.deleteMany({})
    .then(() => transaction.collection.insertMany(seed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
