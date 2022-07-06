import React, { useState } from "react";
import "./../css/wrapper.css";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

function Wrapper() {
  const [quotes, setQuotes] = useState([
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
  ]);

  const [randomQuote, setRandomQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
    );
    

  return (
    <div className="wrapper" id="quote-box">
      <q id="text" className="quote-text">
        {randomQuote.quote}
      </q>
      <p id="author" className="quote-author">
        -{randomQuote.author}
      </p>
      <div className="buttons">
        <button className="btn " onClick={() => setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])}>New Quote</button>

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
