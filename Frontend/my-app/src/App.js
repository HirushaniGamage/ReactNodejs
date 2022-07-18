import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./pages/book/book-list/book-list";
import BookForm from "./pages/book/book-form/book-form";

function App() {
  return (
    /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<BookList></BookList>}></Route>
          </Route>
          <Route path="/bookform">
            <Route index element={<BookForm></BookForm>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
