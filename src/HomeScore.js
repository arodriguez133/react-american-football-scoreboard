import React from "react";
import "./App.css";


const HomeScore = (props) => {
   const {HomeName, HomeScore} = props;
    return(
        <div className = "home">
            <h2 className="home__name">{HomeName}</h2>
            <div className="home__score">{HomeScore}</div>
        </div>
        
    )
};

export default HomeScore;