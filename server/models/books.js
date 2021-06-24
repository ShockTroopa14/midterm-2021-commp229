/* 
Name: Jake Alexander Green
Student Number: 301129153
Date: 6/24/2021

book schema with the properties.
*/

"use strict"
let mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a model class
let Book = new Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Price: { type: Number, required: true },
    Author: { type: String, required: true },
    Genre: { type: String, required: true }
});

const model = mongoose.model('Book', Book)

module.exports = model;