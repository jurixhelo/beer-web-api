const Beer = require("../models/beerModel");

const BeerController = {
  createBeer: async (req, res) => {
    try {
      const { name, type, rating } = req.body;
      if (!name || !type) {
        return res.status(400).json({ error: "Name and type are required." });
      }
      const newBeer = new Beer({ name, type, rating });
      await newBeer.save();
      res.status(201).json(newBeer);
    } catch (err) {
      res.status(500).json({ error: "Failed to create beer.", details: err });
    }
  },

  listBeers: async (req, res) => {
    try {
      const beers = await Beer.find();
      res.status(200).json(beers);
    } catch (err) {
      res.status(500).json({ error: "Failed to list beers.", details: err });
    }
  },

  searchBeers: async (req, res) => {
    try {
      const { query } = req.query;
      if (!query) {
        return res.status(400).json({ error: "Query is required." });
      }
      const beers = await Beer.find({
        name: { $regex: query, $options: "i" }, // Case-insensitive search
      });
      res.status(200).json(beers);
    } catch (err) {
      res.status(500).json({ error: "Failed to search beers.", details: err });
    }
  },

  updateRating: async (req, res) => {
    try {
      const { name } = req.params;
      const { rating } = req.body;
      if (!rating || rating < 1 || rating > 5) {
        return res
          .status(400)
          .json({ error: "Valid rating (1-5) is required." });
      }

      const beer = await Beer.findOne({ name });
      if (!beer) {
        return res.status(404).json({ error: "Beer not found." });
      }

      // Calculate new average rating
      beer.rating = beer.rating ? (beer.rating + rating) / 2 : rating;
      await beer.save();
      res.status(200).json(beer);
    } catch (err) {
      res.status(500).json({ error: "Failed to update rating.", details: err });
    }
  },
};

module.exports = BeerController;
