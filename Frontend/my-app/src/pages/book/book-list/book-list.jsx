import React, { useCallback, useEffect } from "react";
import bookservice from "../../../services/book/book.service";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";

const bookcolumns = [
  { field: "title", headerName: "Book title", width: 160 },
  { field: "author", headerName: "Book Author", width: 160 },
  { field: "genre", headerName: "Book Genre", width: 160 },
  { field: "summary", headerName: "Book Summary", width: 180 },
];

const BookList = () => {
  const [booklist, setBooklist] = React.useState([]);

  useEffect(() => {
    getAllBooks();
  }, [getAllBooks]);

  const getAllBooks = useCallback(() => {
    bookservice.getAllBooks().then((response) => {
      setBooklist(response.data);
    });
  }, []);

  const actionColumn = [
    {
      field: "view",
      headerName: "View Group ",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleView(params.row.id)}
            >
              View
            </div>

            <div
              className="deleteButton"
              onClick={() => bookDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const handleView = (id) => {
    navigate("/bookform" + location.search);
  };

  const bookDelete = (id) => {
    confirmDialog({
      message: "Do you want to delete this book?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => acceptFunc(id),
      reject,
    });
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">BOOK LIST</div>
      <Link path="/bookform">
        <Button variant="text">Add New Book</Button>
      </Link>
      <Button variant="text">Add New Book</Button>
      <DataGrid
        rows={booklist}
        columns={bookcolumns.concat(actionColumn)}
        pageSize={9}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default BookList;
