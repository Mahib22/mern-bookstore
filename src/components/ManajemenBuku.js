import React, { useState } from "react";
import { TabelBuku } from "./TabelBuku";

export const ManajemenBuku = () => {
  const [formMode, setFormMode] = useState("");
  const showCreateForm = () => {
    setFormMode("show");
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>

      <button className="btn btn-sm btn-primary my-2" onClick={showCreateForm}>
        Tambah Buku
      </button>

      {formMode === "show" ? (
        <div id="form" className="card py-2 my-3 bg-secondary">
          <div className="card-body">
            <h4>Form Buku</h4>
            <form className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mx-2"
                  name="title"
                  placeholder="Judul..."
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control mx-2"
                  name="author"
                  placeholder="Penulis..."
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

      <TabelBuku showEdit={showCreateForm} />
    </div>
  );
};
