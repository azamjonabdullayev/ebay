import React, { useState, useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function index() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [pas, setPas] = useState("");
  const [mail, setMail] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    const newUser = {
      "name": `${name.trim()}`,
      "email": `${mail.trim()}`,
      "password": `${pas.trim()}`,
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
    };

    fetch("https://api.escuelajs.co/api/v1/users/", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newUser)
        
    }).then((data)=>{
      if(data.status== 201){
        
        setTimeout((window.location.href='/login'),10000)
      }
      else{
        toast.error('please enter input ')
      }
    })
  }

  return (
    <div className="register_page">
      <ToastContainer />
      <div className="register_card">
        <form className="register_form" onSubmit={addUser}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register_input name"
            id="name"
            placeholder="First name"
          />

          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="register_input name"
            id="lastname"
            placeholder="Last name"
          />
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="register_input email"
            id="email"
            placeholder="Email"
          />
          <input
            type="password"
            value={pas}
            onChange={(e) => setPas(e.target.value)}
            className="register_input email"
            id="password"
            placeholder="Password"
          />

          <div className="register_ratio">
            <input type="checkbox" />
            <p className="radio_text">Connect oformization</p>
          </div>

          <div className="register_btnbox">
            <button className="register_btn" type="submit">
                Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default index;
