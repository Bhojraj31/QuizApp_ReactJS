import React from "react";
import Container from "./Container";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import Login from "./Login";

export default function Sign() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }, 
    [email, password]
  );
  
  useEffect(() => {
    if (user !== null) 
    navigate("/login");
  }, [user]);

  const signupHandler = (event) => {
    setEmail(event.target.Email.value);
    setPassword(event.target.Password.value);
    event.target.reset();
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <div className="card mt-3 col-6 offset-3">
          <div className="card-body bg-dark mt-3">
            <h4 className="card-title text-center" style={{ color: "red" }}>
              Sign up
            </h4>
            <form onSubmit={signupHandler}>
              <div>
                <label className="p-3" style={{ color: "red" }}>
                  Email*
                </label>
                <br />
                <input
                  type="text"
                  name="Email"
                  className="form-control"
                  row="3"
                  placeholder="Enter your email"
                ></input>
              </div>
              <div>
                <label className="p-3" style={{ color: "red" }}>
                  Password*
                </label>
                <br />
                <input
                  type="password"
                  name="Password"
                  className="form-control"
                  row="3"
                  placeholder="Enter your password"
                ></input>
              </div>
              <button className="btn btn-warning mt-3" type="submit">
                Sign up
              </button>
            </form>
          </div>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
