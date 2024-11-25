const express = require("express");
const BeerController = require("../controllers/beerController");
const router = express.Router();

// Create a new beer
router.post("/", BeerController.createBeer);

// List all beers
router.get("/", BeerController.listBeers);

// Search beers by name
router.get("/search", BeerController.searchBeers);

// Update beer rating
router.patch("/:name/rating", BeerController.updateRating);

module.exports = router;
