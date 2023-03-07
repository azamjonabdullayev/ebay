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
      email: mail.trim(),
      password: pas.trim(),
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
    };

    fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          toast.success('ok')
          setTimeout((window.location.href='/'),1000)
        }else{
          toast.error('please enter email or password')
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div className="register_page">
      <ToastContainer />
      <div className="register_card">
        <form className="register_form" onSubmit={addUser}>
          
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
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default index;