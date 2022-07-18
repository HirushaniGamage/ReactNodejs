const mongoose = require("mongoose");
const Book = require("../model/book.model");

//save and update
const saveBook = async (request, response) => {
  try {
    let { id, title, author, genre, summary } = request.body;

    if (id == null) {
      let book = new Book({
        title,
        author,
        genre,
        summary,
      });
      await book.save();

      response.json({
        isSuccess: true,
        message: "Successfully saved the book",
      });
    } else {
      const isBookAvailable = await Book.findById(id);

      if (!isBookAvailable) {
        response.json({
          isSuccess: false,
          message: "Cannot Find the book",
        });
      }

      const bookObj = await Book.findByIdAndUpdate(id, {
        title,
        author,
        genre,
        summary,
      });

      response.json({
        isSuccess: true,
        message: "Successfully Updated",
      });
    }
  } catch (error) {
    response.json({
      isSuccess: false,
      message: "Error",
    });
  }
};

//GetAllBooks
const getAllBooks = async (request, response) => {
  try {
    const books = await Book.find().select();

    response.json(books);
  } catch (error) {
    response.json({
      isSuccess: false,
      message: "Error",
    });
  }
};

//Update Books
const updateBooks = async (request, response) => {
  try {
    let { id, title, author, genre, summary } = request.body;

    const selectbook = await Book.findById(id);

    if (!selectbook) {
      response.json({ isSuccess: false, message: "Cannot find the book" });
    } else {
      const obj = await Book.findByIdAndUpdate(id, {
        title,
        author,
        genre,
        summary,
      });

      response.json({
        isSuccess: true,
        message: "Book updated Successfully",
      });
    }
  } catch (error) {
    response.json({
      isSuccess: false,
      message: "Error",
    });
  }
};

//Delete Books

const deleteBook = async (request, response) => {
  try {
    const bookId = request.params.id;

    let query = await Book.findById(bookId);

    if (!query) {
      response.json({
        isSuccess: false,
        message: "Cannot Find the Book",
      });
    }

    query = await Book.findByIdAndDelete(bookId);

    response.json({
      isSuccess: true,
      message: "Book has been delete successfully",
    });
  } catch (err) {
    response.json({
      isSuccess: false,
      message: "Error",
    });
  }
};

module.exports = {
  saveBook,
  getAllBooks,
  updateBooks,
  deleteBook,
};
