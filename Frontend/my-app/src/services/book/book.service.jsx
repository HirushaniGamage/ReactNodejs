import axios from "axios";
const apiUrl = "http://localhost:4000/api/";

class BookService {
  getAllBooks() {
    return axios.get(`${apiUrl}book/all`);
  }

  saveBook(bookModel) {
    return axios.post(`${apiUrl}book`, bookModel);
  }

  deleteBook(id) {
    return axios.delete(`${apiUrl}book/` + id);
  }
}

export default new BookService();
