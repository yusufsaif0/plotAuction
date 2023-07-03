import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory()
  async function registerUser(e) {
    e.preventDefault();
    console.log(name,email,phone,password);
    const response = await fetch("http://localhost:4000/api/register", {
    method: "POST",  
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    });
    const data = await response.json();
    if(data.status==='ok')
    {
        history.push('/login')
    }
   
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 text-start">
            <form onSubmit={registerUser}>
              <div className="form-group ">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>
            
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </>
  );
}
export default Register;
