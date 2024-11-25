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
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
