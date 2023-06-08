
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [timeOut, setTimeOut] = useState(false);
  const data = [
    {
    id: 1,
    question: "How many seasons of Friends are there?",
    answers: [
      {
        text: "Six 6",
        correct: false,
      },
      {
        text: "Seven 7",
        correct: false,
      },
      {
        text: "Eight 8",
        correct: false,
      },
      {
        text: "Ten 10",
        correct: true,
      },
    ],
  },
    {
      id: 2,
      question: "Monica organises her towels into several categories. But how many?",
      answers: [
        {
          text: "Six 6",
          correct: false,
        },
        {
          text: "Seven 7",
          correct: false,
        },
        {
          text: "Eight 8",
          correct: false,
        },
        {
          text: "Eleven 11",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "What's the first thing Ross says at the beginning of the opening episode?",
      answers: [
        {
          text: "Has anyone seen my Fossil collection",
          correct: false,
        },
        {
          text: "How you Doin",
          correct: false,
        },
        {
          text: "Hi..",
          correct: true,
        },
        {
          text: "O My God",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which character says the last ever line in the series?",
      answers: [
        {
          text: "Gunther",
          correct: false,
        },
        {
          text: "Phoebe",
          correct: false,
        },
        {
          text: "Chandler",
          correct: true,
        },
        {
          text: "Rachel",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "What store does Phoebe hate?",
      answers: [
        {
          text: "Pottery Barn",
          correct: true,
        },
        {
          text: "Lobsters",
          correct: false,
        },
        {
          text: "Candy Stores",
          correct: false,
        },
        {
          text: "Goggle Store",
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: "Where do Rachel and Ross go on their first date?",
      answers: [
        {
          text: "Central Perk",
          correct: false,
        },
        {
          text: "Cinema Hall",
          correct: false,
        },
        {
          text: "Ross's Museum",
          correct: true,
        },
        {
          text: "Rachel's Office",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Chandler and Joey had two pets. What were they called?",
      answers: [
        {
          text: "Chick Jr. and Duck Jr.",
          correct: true,
        },
        {
          text: "Don and Ivana",
          correct: false,
        },
        {
          text: "Brian and Larry",
          correct: false,
        },
        {
          text: "Chan And Zoe",
          correct: false,
        },
      ],
    },
    
    {
      id: 8,
      question: "What is the name of Joey’s acting agent?",
      answers: [
        {
          text: "Martha",
          correct: false,
        },
        {
          text: "Carole",
          correct: false,
        },
        {
          text: "Estelle",
          correct: true,
        },
        {
          text: "Andre",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: "What is the name of Phoebe's alter-ego? ",
      answers: [
        {
          text: "Monica Bing",
          correct: false,
        },
        {
          text: "Regina Falange",
          correct: true,
        },
        {
          text: "Phoebe Neeby",
          correct: false,
        },
        {
          text: "Elaine Benes",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is Janice most likely to say?",
      answers: [
        {
          text: "Oh... my... God!",
          correct: true,
        },
        {
          text: "Get me a coffee!",
          correct: false,
        },
        {
          text: "Chandler..",
          correct: false,
        },
        {
          text: "No way..",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the name of Joey’s character in the commercial for opening milk cartons?",
      answers: [
        {
          text: "Mike",
          correct: false,
        },
        {
          text: "Tommy",
          correct: false,
        },
        {
          text: "Kevin",
          correct: true,
        },
        {
          text: "Drake",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which toe does Chandler lose when Monica drops the knife on his foot?",
      answers: [
        {
          text: "Left foot big toe",
          correct: false,
        },
        {
          text: "Right foot big toe",
          correct: false,
        },
        {
          text: "Right foot pinkie",
          correct: true,
        },
        {
          text: "Left foot pinkie",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the name of the hairless cat Rachel gets for herself?",
      answers: [
        {
          text: "Mrs Whiskerson",
          correct: true,
        },
        {
          text: "Fluffy",
          correct: false,
        },
        {
          text: "Chi Chi",
          correct: false,
        },
        {
          text: "Morzella",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the next line in the song, “Monica, Monica, have a happy Hanukkah”:",
      answers: [
        {
          text: "And please tell Joey, Christmas will be snowy",
          correct: false,
        },
        {
          text: "Saw Santa Claus, he said hello to Ross",
          correct: true,
        },
        {
          text: "Spin the dreidel, Rachel",
          correct: false,
        },
        {
          text: "Went to the store, sat on Santa’s lap",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: " What was the abbreviation of the first stock Monica invested in?",
      answers: [
        {
          text: "MEG",
          correct: true,
        },
        {
          text: "CHP",
          correct: false,
        },
        {
          text: "ZXY",
          correct: false,
        },
        {
          text: "SZG",
          correct: false,
        },
      ],
    },

  ];

  const moneyPyramid =  useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),

 []
  ); 
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber -1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
  
    <div className="app" >

      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
         
        </>
      )}
      
    </div>
    
  );
}

export default App;