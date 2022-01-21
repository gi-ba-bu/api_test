const express = require("express");
const app = express();
const cors = require("cors");
const { capitalizeWord } = require("./helpers");
const { books } = require(data.js);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// C
app.post("/books", (req, res) => {
  const titleVal = req.body.title;
  const authorVal = req.body.author;
  const pagesVal = req.body.pages;
  const newBook = { title: titleVal, author: authorVal, pages: pagesVal };
  const bookKeyArr = titleVal.split(" ");
  const capitalKeyArr = bookKeyArr.map(capitalizeWord);
  const bookKey = capitalKeyArr.join("");
  books[bookKey] = newBook;
  res.status(201).json(newBook);
});

// R
app.get("/cats", (req, res) => {
  res.json(cats);
});

app.get("/cats/:name", (req, res) => {
  try {
    let requestedCatName = req.params.name;
    let matchingCat = cats.find(
      (cat) => cat.name.toLowerCase() === requestedCatName.toLowerCase()
    );
    if (!matchingCat) {
      throw new Error(`We don't have a cat called ${requestedCatName}!`);
    }
    res.json(matchingCat);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// U
app.patch("/cats/:name", (req, res) => {
  // read new data from body
  let newData = req.body;
  // find the data to update - go through the list and match name value to value of dynamic route param of :name
  let requestedCatName = req.params.name;
  let matchingCat = cats.find(
    (cat) => cat.name.toLowerCase() === requestedCatName.toLowerCase()
  );

  // actually update the stored cats data
  let updatedCat = { ...matchingCat, ...newData };
  let catIdx = cats.indexOf(matchingCat);
  cats = [...cats.slice(0, catIdx), updatedCat, ...cats.slice(catIdx + 1)];

  res.json(updatedCat);
});

// D
app.delete("/cats", (req, res) => {
  cats = [];
  res.status(204).send("Cats gone");
});

module.exports = app;
