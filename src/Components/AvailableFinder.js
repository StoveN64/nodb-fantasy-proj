import React from "react";

const AvailableFinder = ({ hero, makeAdventHero }) => {
  return (
    <div className="finder-box">
      
      <img className="aaImage" src={hero.image} alt="character-porthole"/>
      <h3 className="aaText">{hero.name} <br></br> {hero.race} <br></br>{" "}</h3>
      <button onClick={() => makeAdventHero(hero.id)}>Hire adventurer!</button>
    </div>
  );
};

export default AvailableFinder;
