const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

app.use(cors());

const debug = (req, res, next) => {
    console.log('Server responded to a request');
    next()
}



app.listen(port, () => {
    console.log('Server is running on port', port);

})