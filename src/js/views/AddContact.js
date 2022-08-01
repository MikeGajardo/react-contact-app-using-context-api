import React, { useState, useEffect, useContext, } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext"

export const AddContact = () => {
    const { actions } = useContext(Context);
    let history = useHistory()
    const [ textInput, setTextInput] = useState({
        full_name: "",
        phone: "",
        email: "",
        address: "",
        agenda_slug: "MikeyGFunkalicious",
    });

//     const inputSubmit = (e) => {
//         setTextInput((input) => {
//            return { ...input, [e.target.name]: e.target.value , };
//     });
// }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     actions.submitContact(textInput);
    //     setTextInput({
    //         full_name: "",
    //         phone: "",
    //         email: "",
    //         address: "",
    //         agenda_slug: "/MikeyGFunkalicious",
    //       });
    //     };

  
    return (
    <div className="add-container text-white">
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="full_name"
              onChange={(e)=>{
                setTextInput({...textInput, full_name: e.target.value})
              }}
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e)=>{
                setTextInput({...textInput, email: e.target.value})
              }}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              onChange={(e)=>{
                setTextInput({...textInput, phone: e.target.value})
              }}
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={(e)=>{
                setTextInput({...textInput, address: e.target.value})
              }}
              placeholder="Enter address"
            />
          </div>
          <button
            onClick={()=>{
              if (textInput !== ""){
                actions.submitContact(textInput)
                history.push("/")
              }
            }}
            type="submit"
            className="btn btn-success form-control ">
            save
          </button>
          <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
        </form>     
      </div>
    </div>
  )
}
