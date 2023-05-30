import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Who wrote ‘The Hunger Games’?',
    variants: ['Suzanne Collins', 'Joanne Rowling', 'Veronica Roth'],
    correct: 0,
  },
  {
    title: 'Who founded Amazon?',
    variants: ['Bill Gates', 'Jeff Bezos', 'Elon Musk'],
    correct: 1,
  },
  {
    title: 'What is the currency of Denmark?',
    variants: [
      'Franc',
      'Euro',
      'Krone',
    ],
    correct: 2,
  },
];

function Result({correct, percentage}) {
  return (
    <div className="result">
      <div className="progress">
        <div style={{ width: `100%` }} className="progress__inner"></div>
      </div>
      <div class="correct"> {correct} / {questions.length}</div>
      <a href='/'>
      <button>Попробовать снова</button></a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {

  const percentage = Math.round((step / questions.length * 100));

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (<li onClick={() => onClickVariant(index)} key={text}>{text}</li>))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
      console.log(step, index);
      setStep(step + 1);

      if (index === question.correct) {
        setCorrect(correct + 1)
      }
  }

  return (
    <div className="App">
      {
        step !== questions.length 
        ? ( <Game step={step} question={question} onClickVariant={onClickVariant} /> ) 
        : (<Result correct={correct} />)
      }
      
    </div>
  );
}

export default App;
