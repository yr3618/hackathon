import '../App.css';
import React from "react";

function Home() {
  return (
    <div>
      <div className="home">
      
        <h2>Donate money to the charity of your choice by recycling!</h2>
      
      </div>

      <div className="transition">
        <img src={process.env.PUBLIC_URL + "/images/beigeToYellow.png"} alt="transition"></img>
      </div>

      <div className="home yellow">
        <h2>How does it work?</h2>
        <p>Scan the products you want to recycle on our app! Once you have scanned 100 items,and we will donate £2 to the charity of your choice!</p>
        
      </div>
    </div>
  );
}

export default Home;
