import React from "react";

export const TabelBuku = ({ showEdit }) => {
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
          <tr>
            <td>1</td>
            <td>Laskar Pelangi</td>
            <td>Andrea Hirata</td>
            <td>
              <button
                className="btn btn-sm btn-warning mx-2"
                onClick={() => showEdit()}
              >
                Edit
              </button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
