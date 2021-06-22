// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let Book = require('../models/books');


/* GET books List page. READ */
router.get('/', (req, res, next) => {

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
    res.render('../views/books/details', { title: "Add Book" })

    /*****************
     * ADD CODE HERE *
     *****************/

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', async(req, res, next) => {


    console.log(req.body);

    let { title, description, price, author, genre } = req.body;
    try {
        let newBook = await Book.create({ "Title": title, "Description": description, "Price": price, "Author": author, "Genre": genre })
        console.log("SuccessFull new book added: ", newBook);
        res.redirect('/books');
    } catch (error) {
        console.log(error)
    }

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', async(req, res, next) => {
    let id = req.params.id
    let editBook = await Book.findById(id);
    console.log("BOOK", editBook)
    res.render('../views/books/editBook', { title: "Edit Books", editBook: editBook });
    /*****************
     * ADD CODE HERE *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let { title, description, price, author, genre } = req.body;

    let UpdatedBook = new Book({
        "_id": id,
        "Title": title,
        "Description": description,
        "Author": author,
        "Price": price,
        "Genre": genre
    });

    Book.updateOne({ _id: id }, UpdatedBook, (err) => {
        console.log('Book Updated');
        res.redirect('/books');
    })

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;