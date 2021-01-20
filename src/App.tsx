import React from 'react';
import QuestionCard from './components/QuestionCard';

const StartTriva = async() = {

}
const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) {

}
const nextQuestion = () => {

}

function App() {
  return (
    <div className="App">
     <button className="Start" onClick={StartTriva} >Start</button>
     <p className="score">score:</p>
     <p>Loading question...</p>
     <QuestionCard />
     <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
