const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const review = require("./review.js");
const { string } = require("joi");

const listingSchema = new Schema ({
    title: {
       type: String,
       required: true,
    },
    description: String,
    image: {
        // type: String,
        // default: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
        // set: (v) => v === "" ? "https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80" : v,
        
        url: String,
        filename: String,
        
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    geometry: { 
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({ _id : {$in: listing.reviews} });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

// { type: 'Point', coordinates: [ 72.579707, 23.021624 ] }