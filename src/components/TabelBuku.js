import React from "react";

export const TabelBuku = ({ showEdit, books, requestToDelete }) => {
  const deleteData = (book) => {
    requestToDelete(book);
  };

  return (
    <div>
      <h4>Tabel Data Buku</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Judul</th>
            <th>Pengarang</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning mx-2"
                  onClick={() => showEdit(book)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteData(book)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
