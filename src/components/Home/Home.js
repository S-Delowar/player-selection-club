import React, { useState } from "react";
import players from "../../fakeData/players";
import YourClub from "../YourClub/YourClub";
import PlayerCart from "./../PlayerCart/PlayerCart";
import './Home.css';

const Home = () => {
    const [club, setclub] = useState([]);
    
    const addToClubBtn = player => {
        setclub([...club, player]);
        console.log("added player")
    }
    const totalSalary = club.reduce((total, member) => total + member.salary, 0);

  return (
    <div className = "d-flex container">
      <div className="col-md-8">
        {players.map((plr) => (
          <PlayerCart  player={plr} addToClubBtn={addToClubBtn} id={plr.id}></PlayerCart>
        ))}
      </div>
      <div className="col-md-4 club-section">
          <h3 className="orange-text">Your Club</h3>
          <div className="d-flex justify-content-between">
        <h4>Name</h4>
        <h4>Salary </h4>
        </div>
        <YourClub club={club}></YourClub>
        <div className="d-flex justify-content-between">
        <h5>Total Budget</h5>
        <h5>${totalSalary} </h5>
        </div>
         
      </div>
    </div>
  );
};

export default Home;
