import React from "react";
import Question from "./Question";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyBNwk2EulYBl0n3yhYs8XPHxL3bgxSctUo",
  authDomain: "quiz-app-403a4.firebaseapp.com",
  projectId: "quiz-app-403a4",
  storageBucket: "quiz-app-403a4.appspot.com",
  messagingSenderId: "982506082743",
  appId: "1:982506082743:web:c8f478ca8dca46fd769832"
});

export default function Admin() {
  const [quiz, setQuiz] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const id = uuidv4();
    if (quiz !== "") {
      set(ref(db, "quiz-app/" + id), quiz);
    }
  }, [quiz]);

  const submitHandler = (event) => {
    const objQuiz = {
      question: event.target.question.value,
      answer: event.target.answer.value,
      optionA: event.target.optionA.value,
      optionB: event.target.optionB.value,
      optionC: event.target.optionC.value,
      optionD: event.target.optionD.value,
      timeStamp: new Date().toLocaleDateString(),
    };
    setQuiz(objQuiz);
    event.preventDefault();
  };
  return (
    <>
      <header className='container-fluid bg-primary'>
            <nav className="container navbar navbar-expand-md navbar-dark bg-primary">
                <a className='navbar-brand' href='/'>Quiz...</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
            </nav>
      </header>
      <Question handler={submitHandler} />
    </>
  );
}
