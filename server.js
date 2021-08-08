const express = require('express');
const app = express();
const { PORT } = process.env;

app.get('/home', (req, res) => {
    res.status(200).json({message: "all good"})
});

app.listen(PORT, () =>{
    console.log(`App listening at, this port var is from docker-compose.yaml env ${PORT}`);
});