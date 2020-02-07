const mongoose = require('mongoose');

const { Schema } = mongoose;

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments: String,
  rating: {
    type: Number,
    min : 0,
    max: 10,
    default: 0,
  },
  image: String,
  latitude : {
    type: Number,
    required: true,
  },
  longitude : {
    type: Number,
    required: true,
  },
});

* Title -- Text
* Description -- Text
* Comments -- Text
* Rating -- scale of 1 to 10
* Image -- Text -- URL
* Latitude -- Number
* Longitude -- Number
* Created at -- Datetime
* Updated at -- Datetime
