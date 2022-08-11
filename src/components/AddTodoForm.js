import React from "react";
import { useState } from "react";

const AddTodoForm = () => {


 const [AddState,setState] =useState('')
   console.log(AddState)
  return (
    <form className="mt-4">
      <div className="card card-body">
        <div className="form-group">
          <label>ajouter todo</label>
          <input className="form-control"  value={AddState}type="text" onChange={(e)=>{setState(e.target.value)}} />
          <input className="btn btn-success mt-4" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
