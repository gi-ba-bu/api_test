const express = require("express"); /*import express to set up server*/
const app = express();
const cors = require("cors"); /*import cors to run server with a middleman*/


const { capitalizeWord, capitalizeFirstLetter } = require("./helpers"); /*import helpers*/
let { books } = require("./data.js"); /*import data*/

app.use(cors()); 
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome at Node Boooks Admin");
});

// C
app.post("/books", (req, res) => {
  // Get title
  //const titleVal = req.body.title;
  //console.log(titleVal);
  // Provide book object
  //const newBook = req.body;
  //console.log(newBook);
  // Make camel case
  //const bookKey = capitalizeFirstLetter(titleVal).replace(" ","-");
  //console.log(bookKey);
    // Add new book to books Obj
  //books[bookKey] = newBook;
  // return status and book
  //res.status(201).json(newBook);
});

// R
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:name", (req, res) => {
  try {
    let bookReq = req.params.name;
    let returnBook = books[bookReq];
    if (!returnBook) {
      throw new Error(`Sorry, we don't have information about ${bookReq}.`);
    }
    res.json(returnBook)
    } catch(err) {
        res.status(404).json({ message: err.message })
    }
});

// U
app.patch('/books/:title', (req, res) => {
    // read new data from body
    let newData = req.params.title;
    // find the data to update - go through the list and match name value to value of dynamic route param of :name
    let requestedBook = req.params.title;
    let matchingBook = books.find((book) => book.title.toLowerCase() === requestedBook.toLowerCase());
    
    // actually update the stored books data
    let updatedBook = { ...matchingBook, ...newBook }
    let bookIdx = books.indexOf(matchingBook)
    books = [ ...books.slice(0, bookIdx), updatedBook, ...books.slice(bookIdx + 1)]
    
    res.json(updatedBooks)
})

// D
app.delete("/cats", (req, res) => {
  cats = [];
  res.status(204).send("Cats gone");
});

module.exports = app;
