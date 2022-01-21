const express = require("express");
const app = express();
const cors = require('cors');
const { books } = require('data.js')

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World");
});

// C
app.post('/cats', (req, res) => {
    let newCat = { id: cats.length + 1, name: req.body.name };
    cats.push(newCat);
    res.status(201).json(newCat);
})

// R
app.get("/cats", (req, res) => {
    res.json(cats);
});

app.get("/cats/:name", (req, res) => {
    try {
        let bookReq = req.params.name;
        let returnBook = books[bookReq]
        if (!returnBook) {throw new Error(`Sorry, we don't have information about ${bookReq}.`)}
        res.json(returnBook)
        // let requestedCatName = req.params.name;
        // let matchingCat = cats.find((cat) => cat.name.toLowerCase() === requestedCatName.toLowerCase());
        // if(!matchingCat) { throw new Error(`We don't have a cat called ${requestedCatName}!`)}
        // res.json(matchingCat)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

// U
app.patch('/cats/:name', (req, res) => {
    // read new data from body
    let newData = req.body
    // find the data to update - go through the list and match name value to value of dynamic route param of :name
    let requestedCatName = req.params.name;
    let matchingCat = cats.find((cat) => cat.name.toLowerCase() === requestedCatName.toLowerCase());
    
    // actually update the stored cats data
    let updatedCat = { ...matchingCat, ...newData }
    let catIdx = cats.indexOf(matchingCat)
    cats = [ ...cats.slice(0, catIdx), updatedCat, ...cats.slice(catIdx + 1)]
    
    res.json(updatedCat)
})

// D
app.delete("/cats", (req, res) => {
    cats = [];
    res.status(204).send("Cats gone");
})

module.exports = app;
