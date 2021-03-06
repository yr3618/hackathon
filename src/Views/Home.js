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
        <p>Some jbdf jas fkjsdsjhdfg ajshglajhfg ajhgakjhgksjhg kjhg akjhg skhgklsjhfg kjhfg kdsjfhgljdhfg lkafghkahjsglkjfhglkfghgla lkjsf lakjflkd jflkajflkaj klfj alkjfl kdj lk jsdlkgj slkdj lksdjk lsdj flkeajf akj sjdgklj tiwoeisdf neuishgdvnjskd hievnm alk lea fael qeafj kl</p>
      </div>
    </div>
  );
}

export default Home;
