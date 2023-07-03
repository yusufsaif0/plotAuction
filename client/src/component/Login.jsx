import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "reactstrap";
function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [seconderror, setseconderror] = useState({});
  const [visible, setvisible] = useState(false);
 

  async function UserLogin(e) {
    e.preventDefault();
    setformErrors(validate(email, password));
    setisSubmit(true);
    const error = {};
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {   
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data.result);
    if (data.result) {
      var login_obj = {
        _id: data.result._id,
        email: data.result.email,
      };

      localStorage.setItem("token", JSON.stringify(login_obj));
      // alert("login sccessfull")

      if (data.result !=="") {
      
        history.push("/");
        // window.location.href("/admin/dashboard")
       
      } else {
        history.push("/admin/projectlist");
      }
      // window.location.href ="/";
    } else {
      // alert("please check your username and password")
      const error = {};
      error.msg = "please check your email or password";
      setseconderror(error);
      setvisible(true);
    }
  }

  const validate = (email, password) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
    if (!email) {
      errors.email = "email is required!";
    } else if (!regex.test(email)) {
      errors.email = "Please enter valid email!";
    }
    if (!password) {
      errors.password = "password is required!";
    }
    return errors;
  };
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 text-start">
            <Alert
              color="info"
              isOpen={visible}
              toggle={() => setvisible(false)}
            >
              {seconderror.msg}
            </Alert>
            <p></p>
            <fieldset>
              <h3 className="loginhead">Login</h3>

              <form onSubmit={UserLogin}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <p>{formErrors.email}</p>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <p>{formErrors.password}</p>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <Link to="/reset" style={{ textDecoration: "none" }}>
                  Forget Password
                </Link>
                {/* <a href="/reset">Forget Password</a>
                <a href="/trynew">try</a> */}
                
              </form>
            </fieldset>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
}
export default Login;
