import React from "react";
import "./App.css";
import profilePhoto from "./mrak.jpg";

function App() {
  return (
    <div className="App">
      <h1>keerthi ananth nag</h1>
      <img src={profilePhoto} alt="keerthi ananth nag" className="profile-photo" />
      <h2>Introduction</h2>
      <p>
        I am a software engineer with a passion for building web applications.
        I am a quick learner and I am always looking to improve my skills.
      </p>
      <h2>Hobbies</h2>
      <ul>
        <li>Coding</li>
        <li>Photography</li>
        <li>Traveling</li>
        <li>Reading</li>
      </ul>
    </div>
  );
}

export default App;
