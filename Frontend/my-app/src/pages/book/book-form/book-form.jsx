import React, { Component, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setauthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookModel = {
      title: title,
      author: author,
      genre: genre,
      summary: summary,
    };

    bookService.saveBook(bookModel).then((response) => {
      if (response) {
        console.log(response.data);
      }
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add New Book
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="author"
                label="Author"
                name="author"
                value={author}
                onChange={(e) => setauthor(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="genre"
                label="Genre"
                name="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="summary"
                label="summary"
                name="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                autoFocus
              />

              <Button
                id="signup"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Book
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};
export default BookForm;
