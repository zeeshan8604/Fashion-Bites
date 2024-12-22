const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the SearchHistory schema
const searchHistorySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  searches: [{ type: String }],
});

// Create a model from the schema
const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema);

module.exports = SearchHistory;
