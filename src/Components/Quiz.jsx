import React from "react";
import { Link } from "react-router-dom";
// import User from "./User";
export default function Quiz() {
  const timer = () => {
    let intervalHolder;
    const tenMin = 0.2 * 60 * 1000;
    const start = new Date();
    const end = start.getTime() + tenMin;

    const clock = () => {
      const now = new Date().getTime();
      const diff = end - now;
      if (diff <= 0) {
          clearInterval(intervalHolder);
          alert("Game ends")
      }
      let min;
      let sec;
      min.innerText = Math.floor(diff / 1000 / 60);
      sec.innerText = Math.floor(diff / 1000) % 60;

      intervalHolder = setInterval(
        function() {
            clock()
        },
        1000
    )
  }

  };
  return (
    <>
      <header className="container-fluid bg-primary">
        <nav className="container navbar navbar-expand-md navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Quiz...
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <button className="btn btn-warning " to="/">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="text-center mt-5">
          <Link to="/User">
            <button className="btn btn-warning mt-5 btn-lg" onClick={() => timer()}>Start</button>
          </Link>
        </div>
      </div>
    </>
  );
}
