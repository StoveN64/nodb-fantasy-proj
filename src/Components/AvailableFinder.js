import React from 'react';

const AvailableFinder = ({hero, makeAdventHero}) => {
    return (
    <div><button onClick={() => makeAdventHero(hero.id)}>Hire adventurer!</button>{hero.name} <br></br> {hero.race} <hr></hr> </div>
    )
} 

export default AvailableFinder
