const express = require("express");
const User = require("../models/UserModel");
const SearchHistory = require("../models/Usersearchs");

// for adding history

const searchhistory = async (req, res) => {
  const { query } = req.body;

  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).send({ errors: "User not found" });
    }

    let searchHistory = await SearchHistory.findOne({ user: userData._id });
    if (!searchHistory) {
      searchHistory = new SearchHistory({ user: userData._id, searches: [] });
    }

    searchHistory.searches.push(query);
    if (searchHistory.searches.length > 10) {
      searchHistory.searches = searchHistory.searches.slice(-10);
    }

    await searchHistory.save();
    res.status(200).send("Search query added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding search query");
  }
};

const fetchSearchHistory = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).send({ errors: "User not found" });
    }
    let searchHistory = await SearchHistory.findOne({ user: userData._id });

    if (!searchHistory) {
      return res.status(404).send({ errors: "No search history" });
    }
    let uniqueSearchHistory = [...new Set(searchHistory.searches)];
    res.status(200).send({ searchHistory: uniqueSearchHistory });
  } catch (error) {
    console.error(error);
    res.status(500).send({ errors: "Server error" });
  }
};
module.exports = { searchhistory, fetchSearchHistory };
