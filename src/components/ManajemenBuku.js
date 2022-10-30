import React, { useEffect, useState } from "react";
import { TabelBuku } from "./TabelBuku";
import axios from "axios";

export const ManajemenBuku = () => {
  const [formMode, setFormMode] = useState("");
  const [books, setBooks] = useState([]);
  const [inputForm, setInputForm] = useState();

  const showCreateForm = () => {
    setInputForm("");
    setFormMode("create");
  };

  const showEditForm = (book) => {
    setInputForm(book);
    setFormMode("edit");
  };

  const handleTitle = (e) => {
    setInputForm({ ...inputForm, title: e.target.value });
  };

  const handleAuthor = (e) => {
    setInputForm({ ...inputForm, author: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (formMode === "create") {
      axios
        .post("http://localhost:4000/book/add", inputForm)
        .then(() => {
          alert("Data berhasil ditambahkan");
          retreiveData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    if (formMode === "edit") {
      axios
        .put(`http://localhost:4000/book/update/${inputForm._id}`, inputForm)
        .then(() => {
          retreiveData();
          alert("Data berhasil diubah");
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const deleteOne = (book) => {
    axios
      .delete(`http://localhost:4000/book/delete/${book._id}`)
      .then(() => {
        retreiveData();
        alert("Data berhasil dihapus");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    retreiveData();
  }, []);

  const retreiveData = () => {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>

      <button className="btn btn-sm btn-primary my-2" onClick={showCreateForm}>
        Tambah Buku
      </button>

      {formMode !== "" ? (
        <div id="form" className="card py-2 my-3 bg-secondary">
          <div className="card-body">
            <h4>Form Buku</h4>
            <form className="row" onSubmit={submitForm}>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mx-2"
                  name="title"
                  placeholder="Judul..."
                  onChange={handleTitle}
                  value={inputForm.title || ""}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control mx-2"
                  name="author"
                  placeholder="Penulis..."
                  onChange={handleAuthor}
                  value={inputForm.author || ""}
                />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <TabelBuku
        showEdit={showEditForm}
        books={books}
        requestToDelete={deleteOne}
      />
    </div>
  );
};
