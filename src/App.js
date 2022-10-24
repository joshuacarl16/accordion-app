import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./question";
import "./App.css";

function App() {
  const [questions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
