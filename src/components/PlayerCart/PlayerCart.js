import React from "react";

const PlayerCart = (props) => {
  const { player } = props;
  return (
    <div className="d-flex p-4">
      <div >
        <img src={player.image} alt="" />
      </div>
      <div className="m-4">
        <h2>Name: {player.name}</h2>
        <h3>Salary: ${player.salary}</h3>
        <button className="btn btn-primary mt-4" onClick={()=>props.addToClubBtn(props.player)}>Add To Club</button>
      </div>
    </div>
  );
};

export default PlayerCart;
