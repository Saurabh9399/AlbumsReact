import React from "react";

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value);
    e.target.name.value = "";
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add Albums</h3>
        <input placeholder="Albums Name" name="name" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;