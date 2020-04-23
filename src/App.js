//TODO: STEP 1 - Import the useState hook.
import React from "react";
import BottomRow from "./BottomRow";
import HomeScore from "./HomeScore.js";
import AwayScore from "./AwayScore.js";
import "./App.css";
import { useState } from "react";

function Game() {
   const [homeScore, setHomeScore] = useState(0);
   const [awayScore, setAwayScore] = useState(0);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <HomeScore HomeName = "Lions" HomeScore ={homeScore} />
        <div className="timer">00:03</div>
          <AwayScore awayName = "Tigers" awayScore = {awayScore}/>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
    <button className="homeButtons__touchdown" onClick={() =>{
        setHomeScore(homeScore + 7);
      }}>Home Touchdown</button>
      <button className="homeButtons__fieldGoal"onClick ={() => {
        setHomeScore(homeScore+3);
      }}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick ={() => {
            setAwayScore(awayScore + 7);
          }}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => {
            setAwayScore(awayScore + 3);
          }}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default Game;
