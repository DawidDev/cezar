import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import styled from "styled-components";

import Visualization from "./Visualization";
import FAQ from "./FAQ";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const MainContainer = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 50px;
  border-radius: 20px;

  .checked {
    background-color: #3f51b5;
    color: #fff;
  }

  .block_1 {
    width: 45%;
  }

  .block_2 {
    width: 45%;

    .visualization {
      display: flex;
    }

    button {
      margin-top: 20px;
      display: block;
    }
  }

  button {
    padding: 5px 10px;
    transition: 0.25s;
    border: none;
    outline: none;
    margin-right: 20px;
    font-size: 1rem;

    :hover {
      cursor: pointer;
    }
  }

  textarea {
    display: block;
    width: 80%;
    height: 50px;
    word-break: break-all;
  }

  h3 {
    padding: 0;
    margin: 20px 0;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 90%;
    padding: 20px;

    .block_1,
    .block_2 {
      width: 100%;
    }
  }
`;

const App = () => {
  const [message, setMessage] = useState("");
  const [operation, setOperation] = useState("szyfrowanie");
  const [key, setKey] = useState(1);
  const [showVisualization, setShowVisualization] = useState(false);

  const alphabetSmall = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Treści zaszyfrowane i zdeszyfrowane

  let tekstSzyfr = [];
  let tekstDeszyfr = [];

  // Obsługa szyfrowania i deszyfrowania
  const handleSZYFR = (letterIndex, size, key, operation) => {
    const C_szyfr = (letterIndex + key) % 26;
    const C_deszyfr =
      (letterIndex - key) % 26 < 0
        ? 26 + ((letterIndex - key) % 26)
        : (letterIndex - key) % 26;
    const C = operation === "szyfrowanie" ? C_szyfr : C_deszyfr;

    const trueTab = operation === "szyfrowanie" ? tekstSzyfr : tekstDeszyfr;
    if (size === "small") trueTab.push(alphabetSmall[C]);
    else if (size === "big") trueTab.push(alphabetBig[C]);
  };

  const Szyfrowanie = (text, key, operation) => {
    text.forEach((item) => {
      if (alphabetSmall.indexOf(item) !== -1)
        handleSZYFR(alphabetSmall.indexOf(item), "small", key, operation);
      else if (alphabetBig.indexOf(item) !== -1)
        handleSZYFR(alphabetBig.indexOf(item), "big", key, operation);
      else (operation === "szyfrowanie" ? tekstSzyfr : tekstDeszyfr).push(item);
    });
  };

  const handleButtonOperation = (operation) => {
    setOperation(operation);
    setMessage("");
    setShowVisualization(false);
  };

  Szyfrowanie(message.split(""), key, operation);

  const resultMessage =
    operation === "szyfrowanie" ? tekstSzyfr.join("") : tekstDeszyfr.join("");
  const h3Result =
    operation === "szyfrowanie" ? "Zaszyfrowana" : "Zdeszyfrowana";
  return (
    <>
      <Header>
        <h1>Szyfruj jak cezar</h1>
      </Header>
      <MainContainer>
        <div className="block_1">
          <h3>Rodzaj operacji:</h3>
          <button
            onClick={() => handleButtonOperation("szyfrowanie")}
            className={operation === "szyfrowanie" ? "checked" : null}
          >
            Szyfrowanie
          </button>
          <button
            onClick={() => handleButtonOperation("deszyfrowanie")}
            className={operation === "deszyfrowanie" ? "checked" : null}
          >
            Deszyfrowanie
          </button>
          <h3>Treść wiadomości:</h3>
          <textarea
            placeholder="Wiadomość"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <h3>Wybór klucza: {key}</h3>
          <InputRange
            maxValue={26}
            minValue={1}
            value={key}
            onChange={(value) => setKey(value)}
          />
        </div>
        <div className="block_2">
          <h3>{h3Result} treść:</h3>
          {resultMessage}
          <button
            className={showVisualization ? "checked" : null}
            onClick={() => setShowVisualization((prevValue) => !prevValue)}
          >
            {showVisualization ? "Ukryj" : "Pokaż"} wizualizację
          </button>
          <div className="visualization">
            {showVisualization ? (
              <Visualization encrypted={resultMessage} text={message} />
            ) : null}
          </div>
        </div>
      </MainContainer>
      <FAQ />
    </>
  );
};

export default App;
