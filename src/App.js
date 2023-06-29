import React, { useState } from "react";
import Data from "./Components/Data";
import SingleQuestion from "./Components/Question";

const App = () => {
  const [questions, setQuestions] = useState(Data);
  return (
    <main>
      <div>
        <div className="container">
          <h3>Questions and answers about login</h3>
          <section className="info">
            {questions.map((questions) => {
              return <SingleQuestion key={questions.id} {...questions} />;
            })}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
