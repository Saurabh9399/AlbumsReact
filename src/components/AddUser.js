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
        <h3 style={{fontSize:'1.5rem', color: 'grey'}}>Add Albums</h3>
        <input style={{padding:'0.5rem', margin:'1rem'}} placeholder="Albums Name" name="name" />
        <button style={{padding:'0.4rem 1rem', margin:'1rem'}} onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;