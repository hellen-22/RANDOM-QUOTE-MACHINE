import React from "react";
import "./../css/wrapper.css";

function Wrapper() {
  return (
    <div className="wrapper" id="quote-box">
      <q id="text" className="quote-text">
        The battles that count aren’t the ones for gold medals. The struggles
        within yourself the invisible battles inside all of us that’s where it’s
        at.
      </q>
      <p id="author" className="quote-author">
        -Hellen Wainaina
      </p>
      <div className="buttons">
        <div id="new-quote">
          <button className="btn btn-primary">New Quote</button>
        </div>
        <div id="share-quote">
          <a
            className="sharebutton btn btn-primary"
            href="twitter.com/intent/tweet"
          >
            Twitter
          </a>
          <a
            className="sharebutton btn btn-primary"
            href="twitter.com/intent/tweet"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
