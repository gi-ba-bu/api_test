const express = require("express"); /*import express to set up the server*/
const app = express(); // we assigne our server to the variable `app` in this setup
const cors = require("cors"); /*import cors to run server with a middleman*/


const { capitalizeFirstLetter } = require("./helpers"); /*import helper functions*/
let { books } = require("./data.js"); /*import book data*/

app.use(cors()); 
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Node Boooks Admin");
});

// Create
app.post("/books", (req, res) => {
  console.log(req.body);
  //Get title
  const titleVal = req.body.title;
  console.log(titleVal);
  //Provide book object
  const newBook = req.body;
  console.log(newBook);
  //Normalize title (optional)
  const bookTitle = capitalizeFirstLetter(titleVal);
  newBook.title = bookTitle;
  //title string to hamburger case to be used as an object name
  const bookKeyHamb = bookKey.replaceAll(" ","-").toLowerCase();
  // Add new book to books Obj
  books[bookKeyHamb] = newBook;
  // return status and book
  res.status(201).json(newBook);
});

// Read
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:title", (req, res) => {
  try {
    let bookReq = req.params.title;
    let returnBook = books[bookReq];
    if (!returnBook) {
      throw new Error(`Sorry, we don't have information about ${bookReq}.`);
    }
    res.json(returnBook)
    } catch(err) {
        res.status(404).json({ message: err.message })
    }
});

// Update
app.patch('/books/:title', (req, res) => {
    // read new data from body
    let newData = req.body;
    console.log(newData);
    // change title case to lower case hamburger case 
    let requestedBookTitle = req.body.title.replaceAll(" ","-").toLowerCase();
    // find the book to update using title to match 
    let matchingBook = books[requestedBookTitle];
    // update with the new information
    books[requestedBookTitle] = newData;
    // return all books
    res.json(books);
});

// Delete
app.delete("/books", function (req, res) {

try{
    if (!books === !{}) {
    throw new Error(`Bad request. All books already deleted.`);
    }
    books = {};
    res.send('Important Message: Got a DELETE request at /books. All books deleted.');
   } catch(err) {
    res.status(400).json({ message: err.message }) 
    }
});

module.exports = app;
