import { useEffect, useState } from 'react';
import './app.css';
import Start from './components/Start';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
function App() {
  const data = [
    {
      id: 1,
      question: 'Rolex is a company that specializes in what type of product?',
      answers: [
        {
          text: 'Phone',
          correct: false,
        },
        {
          text: 'Watches',
          correct: true,
        },
        {
          text: 'Food',
          correct: false,
        },
        {
          text: 'Cosmetic',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'When did the website `Facebook` launch?',
      answers: [
        {
          text: '2004',
          correct: true,
        },
        {
          text: '2005',
          correct: false,
        },
        {
          text: '2006',
          correct: false,
        },
        {
          text: '2007',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = [
    {
      id: 1,
      money: '$ 100',
    },
    {
      id: 2,
      money: '$ 200',
    },
    {
      id: 3,
      money: '$ 300',
    },
    {
      id: 4,
      money: '$ 500',
    },
    {
      id: 5,
      money: '$ 1000',
    },
    {
      id: 6,
      money: '$ 2000',
    },
    {
      id: 7,
      money: '$ 4000',
    },
    {
      id: 8,
      money: '$ 8000',
    },
    {
      id: 9,
      money: '$ 16000',
    },
    {
      id: 10,
      money: '$ 32000',
    },
    {
      id: 11,
      money: '$ 64000',
    },
    {
      id: 12,
      money: '$ 125000',
    },
    {
      id: 13,
      money: '$ 150000',
    },
    {
      id: 14,
      money: '$ 200000',
    },
    {
      id: 15,
      money: '$ 250000',
    },
  ].reverse();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');
  const [username,setUserName] = useState(null);
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).money);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username?(<>
        <div className="main">
        {stop ? (
          <h1>You Earned:{earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setStop={setStop}
                
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="pyramidList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? 'pyramidListItems active'
                  : 'pyramidListItems'
              }
            >
              <span className="pyramidListItemNumber">{m.id}</span>
              <span className="pyramidListItemPrice">{m.money}</span>
            </li>
          ))}
        </ul>
      </div>
      
      </>):<Start setUserName={setUserName}/>}
     
    </div>
  );
}

export default App;
