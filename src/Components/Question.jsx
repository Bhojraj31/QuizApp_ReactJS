import React from "react";
import Container from "./Container";
export default function Question(props) {
  return (
    <Container>
      <div className="card mt-3 col-6 offset-3">
        <div className="card-body bg-dark">
          <h4 className="card-title text-center" style={{color:"red"}}>Question</h4>
          <form onSubmit={props.handler}>
            <textarea type="text" name="question" placeholder="Enter your question ?" className="form-control" row="3"></textarea>
            <br />
            <div className="p-2">
                <label className="p-3" style={{color:"red"}}>A</label>
                <input type="text" name="optionA" className="" placeholder="Opation"></input>
            </div>
            <div className="p-2">
                <label className="p-3" style={{color:"red"}}>B</label>
                <input type="text" name ="optionB" className="" placeholder="Opation"></input>
            </div>
            <div className="p-2">
                <label className="p-3" style={{color:"red"}}>C</label>
                <input type="text" name ="optionC" className="" placeholder="Opation"></input>
            </div>
            <div className="p-2">
                <label className="p-3" style={{color:"red"}}>D</label>
                <input type="text" name = "optionD" className="" placeholder="Opation"></input>
            </div>
            <label className="form-lable">Correct Option</label>
            <select name="answer" className="form-select">
                <option>Chose the option</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
            </select>
            <button className="btn btn-warning mt-3" type="reset">Reset</button>
            <button className="btn btn-warning mt-3 float-end" type="submit">Save</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
