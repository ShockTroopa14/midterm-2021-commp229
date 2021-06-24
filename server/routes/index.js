/* 
Name: Jake Alexander Green
Student Number: 301129153
Date: 6/24/2021

index page with the routes for homepage and comic books
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
    res.render('content/index', {
        title: 'Home',
        books: ''
    });
});

router.get('/books', (req, res, next) => {
    // find all books in the books collection
    book.find((err, books) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('../views/books/index', {
                title: 'books',
                books: books
            });
        }
    });



});
module.exports = router;