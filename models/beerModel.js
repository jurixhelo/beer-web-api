// let beers = [];

// const BeerModel = {
//   addBeer: (beer) => {
//     beers.push(beer);
//     return beer;
//   },
//   listBeers: () => beers,
//   searchBeers: (query) =>
//     beers.filter((beer) =>
//       beer.name.toLowerCase().includes(query.toLowerCase())
//     ),
//   updateRating: (name, newRating) => {
//     const beer = beers.find((b) => b.name === name);
//     if (beer) {
//       beer.rating = beer.rating ? (beer.rating + newRating) / 2 : newRating; // Average rating
//       return beer;
//     }
//     return null;
//   },
// };

// module.exports = BeerModel;

const mongoose = require("mongoose");

const beerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 }, // Single rating value (current)
  sumOfRatings: { type: Number, default: 0 }, // Sum of all ratings
  ratingCount: { type: Number, default: 1 }, // Total number of times the beer was rated
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
