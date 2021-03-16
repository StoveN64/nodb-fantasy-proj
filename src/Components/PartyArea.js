import ChosenFollowers from './ChosenFollowers'
import React from 'react'

//  hired heroes, rename fn, disband fn


const PartyArea = ({hiredHeroes, editName, disbandHero}) => {
    const chosenHeroes = hiredHeroes.map((hero) => {
     return <ChosenFollowers
     hero={hero}
     editName = {editName}
     disbandHero = {disbandHero}
     key = {hero.id}
     />
    
       
    });
    return (
        <div className="above"> <br></br><h2>Your Chosen Followers...</h2>
        <div className="heroBox">
            <h2></h2>
            {chosenHeroes}
        </div>
        </div>
    )
}
    

        
export default PartyArea;
