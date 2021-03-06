import '../App.css';
import React from "react";

function Home() {
  return (
    <div>
      <div  className="home">
        <h1>Home</h1>
        <p>Paragraph</p>
      </div>

      <div  className="transition">
        <img src={process.env.PUBLIC_URL + "/images/beigeToYellow.png"} alt="transition"></img>
      </div>
    </div>
  );
}

export default Home;
