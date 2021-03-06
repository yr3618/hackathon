import '../App.css';
import React from "react";

function Home() {
  return (
    <div>
      <div className="home">
        <h1>Home</h1>
        <p>Paragraph</p>
      </div>

      <div className="transition">
        <img src={process.env.PUBLIC_URL + "/images/beigeToYellow.png"} alt="transition"></img>
      </div>

      <div className="home yellow">
        <h2>A subtitle</h2>
        <p>Donate money to the charity of your choice by donating!</p>
        <p>How does it work?</p>
        <p>Scan the products you want to recycle and once you have scanned 100 items,and we will donate £2 to the charity of your choice!</p>
      </div>
    </div>
  );
}

export default Home;
