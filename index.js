const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

const debug = (req, res, next) => {
    console.log('Server responded to a request');
    next()
}
const transformName = (req, res, next) => {

}

const superHeroes = require("./superHeroes.json")

app.use(cors());
app.use(debug)
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get("/heroes", (req, res) => {
    res.json(superHeroes)
})
app.get("/heroes/:name", (req, res) => {
    const superHeroe = superHeroes.find(elem => elem.name.toLowerCase() === req.params.name.toLowerCase())
    // replace whitespace by `%20`
    res.json(superHeroe)
})
app.get("/heroes/:name/powers", (req, res) => {
    // replace whitespace by `%20`
    const superHeroe = superHeroes.find(elem => elem.name.toLowerCase() === req.params.name.toLowerCase())
    res.json(superHeroe.power)
})
app.post("/heroes", (req, res) => {
    superHeroes.push(req.body)
    res.send("Ok, héro ajouté !")
    console.log(`superHeroes`, superHeroes)
})
app.post("/heroes/:name/powers", (req, res) => {
    const superHeroe = superHeroes.find(elem => elem.name.toLowerCase() === req.params.name.toLowerCase())
    superHeroe.power.push(req.body.power)
    res.send("Ok, pouvoir ajouté !")
    console.log(`superHeroes`, superHeroes)
})

app.listen(port, () => {
    console.log('Server is running on port', port);

})