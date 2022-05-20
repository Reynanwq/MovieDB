const express = require('express')
const app = express()
const PORT = 3000;
const fetch = require("cross-fetch")
const cors = require('cors')

app.get("/api", (req, res) => {
    const response = await fetch(
        "https://image.tmdb.org/t/p/w500"
    );
    const data = await response.json();
    res.json(data);

});

app.get("/api", (req, res) => {
    const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    );
    const data = await response.json();
    res.json(data);

});


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})

app.use(cors())