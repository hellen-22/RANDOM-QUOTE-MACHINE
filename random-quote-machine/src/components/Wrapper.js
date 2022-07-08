import React, { useState } from "react";
import "./../css/wrapper.css";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
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

  return (
    <div className="wrapper" id="quote-box">
      <q id="text" className="quote-text">
        {quotes.text}
      </q>
      <p id="author" className="quote-author">
        -{quotes.author}
      </p>
      <div className="buttons">
        <button
          className="btn "
          onClick={randomQuote}
        >
          New Quote
        </button>

        <div id="share-quote">
          <a className="sharebutton btn " href="twitter.com/intent/tweet">
            <FaTwitter />
          </a>
          <a className="sharebutton btn " href="twitter.com/intent/tweet">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
