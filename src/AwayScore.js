import React from "react";
import "./App.css";

const AwayScore = (props) => {
    const {awayName, awayScore} = props;
    return(
        <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{awayScore}</div>
        </div>
        
    )
}


export default AwayScore;