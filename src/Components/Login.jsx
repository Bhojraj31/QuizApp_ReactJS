import React from "react";
import Container from "./Container";
import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(
    () =>{
      if (email !== "" && password !== "") {
        signInWithEmailAndPassword(auth, email, password)
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
  )

  useEffect(() => {
    if (user !== null) 
    navigate("/Quiz");
  }, [user]);

  const loginHandler = (event) => {
    setEmail(event.target.Email.value);
    setPassword(event.target.Password.value);
    event.target.reset();
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <div className="card mt-3 col-6 offset-3">
          <div className="card-body bg-dark  mt-3">
            <h4 className="card-title text-center" style={{ color: "red" }}>
              Log in
            </h4>
            <form onSubmit={loginHandler}>
              <div>
                <label className="p-3" style={{ color: "red" }}>
                  Email*/UserName*
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
                  log in
                </button>
            </form>
          </div>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
