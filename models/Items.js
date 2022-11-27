const mongoose = require('mongoose');

let ItemScheme = new mongoose.Schema({

    name : {

        type: String,
        required: true,
        index: true

    },

    image : {

        type: String,
        required: true,

    },

    price : {

        type: Array,
        required: true,

    },

    tags : {

        type: Array

    }


},
{
    toJSON: {virtuals:true},
    toObject: {virtuals:true},
    timestamps: true,
    versionKey: false
}
);

module.exports = mongoose.model('items', ItemScheme);