import React from "react";
import Container from "./Container";
import { useEffect, useState, useRef } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

export default function User() {
  const [questionData, setQuestionData] = useState(null);
  let [count, setCount] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const p = useRef();
  const n = useRef();
  const reset = useRef();

  // const [optionRemove, setOptionRemove] = useState();

  useEffect(() => {
    const db = getDatabase();
    const quizRef = ref(db, "quiz-app/");
    onValue(quizRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setQuiz(Object.values(data));
      }
    });
  }, []);

  useEffect(() => {
    if (quiz.length !== 0) {
      setCount(0);
      setQuestionData(quiz[count]);
    }
    let optionselected = localStorage.getItem("optionselected");
  }, [quiz]);

  useEffect(() => {
    if (questionData !== null && questionData !== undefined) {
      if (count === 0) {
        p.current.disabled = true;
      } else {
        p.current.disabled = false;
      }
      if (count === quiz.length - 1) {
        n.current.disabled = true;
      } else {
        n.current.disabled = false;
      }
    }
    setQuestionData(quiz[count]);
  }, [count]);

  const nextHandler = (event) => {
    setCount(++count);
    event.preventDefault();
    reset.current.reset();
  };

  const prevHandler = (event) => {
    setCount(--count);
    event.preventDefault();
    reset.current.reset();
  };

  const onchangeHandler = (event) => {
    const usedata = event.target.value;
    quiz[count].selected = usedata;
    // console.log(questionData);
    if (questionData.answer === usedata) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
    localStorage.setItem("optionselected", JSON.stringify(quiz));
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
        </nav>
      </header>
      {questionData !== null && questionData !== undefined ? (
        <>
          <div className="card  col-10 offset-1 mt-3 ">
            <div>
              <h3 className="pt-3">
              Questions ???
              <samp className="float-end px-2" id="min">
                00 
              </samp>
              <samp className="float-end px-2">
                :
              </samp>
              <samp className="float-end px-2" id="sec">
                00 
              </samp>
              </h3>
            </div>  
            <div className="card-body bg-dark mt-3">
              <form ref={reset}>
                <div className="question">
                  <h2
                    className="card-title text-center"
                    style={{ color: "red" }}
                  >
                    {questionData.question}
                  </h2>
                </div>
                <Container>
                  <div className="option">
                    <label className="p-3" style={{ color: "red" }}>
                      1)
                    </label>
                    <input
                      type="radio"
                      name="option"
                      onChange={onchangeHandler}
                      value={1}
                      checked = {
                        questionData.selected === "1" ? true : false
                      }
                    />

                    <label className="p-3" style={{ color: "red" }}>
                      {questionData.optionA}
                    </label>
                  </div>
                  <div className="option">
                    <label className="p-3 " style={{ color: "red" }}>
                      2)
                    </label>
                    <input
                      type="radio"
                      name="option"
                      onChange={onchangeHandler}
                      value={2}
                      checked = {
                        questionData.selected === "2" ? true : false
                      }
                    />
                    <label className="p-3" style={{ color: "red" }}>
                      {questionData.optionB}
                    </label>
                  </div>
                  <div className="option">
                    <label className="p-3" style={{ color: "red" }}>
                      3)
                    </label>
                    <input
                      type="radio"
                      name="option"
                      onChange={onchangeHandler}
                      value={3}
                      checked = {
                        questionData.selected === "3" ? true : false
                      }
                    />
                    <label className="p-3" style={{ color: "red" }}>
                      {questionData.optionC}
                    </label>
                  </div>
                  <div className="option">
                    <label className="p-3" style={{ color: "red" }}>
                      4)
                    </label>
                    <input
                      type="radio"
                      name="option"
                      onChange={onchangeHandler}
                      value={4}
                      checked = {
                        questionData.selected === "4" ? true : false
                      }
                    />
                    <label className="p-3" style={{ color: "red" }}>
                      {questionData.optionD}
                    </label>
                  </div>
                </Container>
                <div className="text-center">
                  <button
                    className="btn btn-warning "
                    onClick={prevHandler}
                    ref={p}
                  >
                    Prevs
                  </button>
                  <button
                    className="btn btn-warning mx-3"
                    onClick={nextHandler}
                    ref={n}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt -5 text-center">
            <strong className="display-3">Loading...</strong>
            <div
              class="spinner-border mt-5 "
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </>
      )}
    </>
  );
}
