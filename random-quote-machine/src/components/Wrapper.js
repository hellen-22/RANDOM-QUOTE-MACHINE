import React, { useState } from "react";
import "./../css/wrapper.css";
import { FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import axios from "axios";

function Wrapper() {
  const sampleQuotes = [
    {
      id: 1,
      quote: "My name is Hellen and I am a software engineer.",
      author: "Hellen",
    },
    {
      id: 2,
      quote: "I am a software engineer.",
      author: "Wayne",
    },
    {
      id: 3,
      quote: "I am me.",
      author: "Wairimu",
    },
  ];

  const [quotes, setQuotes] = useState([]);

  const randomQuote = () => {
    axios
      .get("https://goquotes-api.herokuapp.com/api/v1/random?count=150")
      .then((response) => {
        console.log(response);

        setQuotes(
          response.data.quotes[
            Math.floor(Math.random() * response.data.quotes.length)
          ]
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //change button color when clicked
  const colors = [
    "#00bcd4",
    "#ff9800",
    "#9c27b0",
    "#2196f3",
    "#009688",
    "#ffeb3b",
    "#ff5722",
    "#673ab7",
    "#e91e63",
    "#3f51b5",
    "#795548",
    "#607d8b",
    "#9e9e9e",
    "#212121",
    "#f44336",
    "#3f51b5",
    "#795548",
    "#607d8b",
    "#9e9e9e",
    "#232323",
    "#f66d9b",
    "#673ab7",
    "#e91e63",
    "#2f3f4d",
    "#e65100",
    "#23fea9",
  ];
  const [color, setColor] = useState("#00bcd4");

  const changeColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    setColor(colors[random]);
  };

  return (
    <div className="wrapper" id="quote-box">
      <q id="text" className="quote-text" style={{ color: color }}>
        {quotes.text}
      </q>
      <p id="author" className="quote-author">
        -{quotes.author}
      </p>
      <div className="buttons">
        <button
          className="btn "
          onClick={() => {
            randomQuote();
            changeColor();
          }}
          style={{ backgroundColor: color, color: "white" }}
        >
          New Quote
        </button>

        <div id="share-quote">
          <a
            className="btn "
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fparse.com"
            style={{ backgroundColor: color, color: "white" }}
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="btn "
            href={`https://web.whatsapp.com/send?text= ${quotes.text} + ${quotes.author}`}
            style={{ backgroundColor: color, color: "white" }}
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
