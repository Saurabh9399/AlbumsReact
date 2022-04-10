import React from "react";
import "./user.css";

const User = ({ id, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="list">
      <h3>{name}</h3>
      <div>
        <button className="btn-left">
          <i class="far fa-edit"></i>Edit
        </button>
        <button onClick={handleDelete} className="btn-right">
          <i class="far fa-trash-alt"></i>Delete
        </button>
      </div>
    </div>
  );
};

export default User;