const express = require("express");
const router = express.Router();

const {
  saveBook,
  getAllBooks,
  updateBooks,
  deleteBook,
} = require("../Controllers/book.controller");

router.post("/", saveBook);
router.get("/all", getAllBooks);
router.put("/:id", updateBooks);
router.delete("/:id", deleteBook);

module.exports = router;
