

import React, { Component } from 'react'

export class ChosenFollowers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inputName: props.hero.name,
        }

        this.nameChange = this.nameChange.bind(this)
        this.editToggle= this.editToggle.bind(this)
    }

    nameChange(value){
        return this.setState({inputName: value})   
    }


    editToggle(){
        return this.setState({edit: !this.state.edit})
    }


    
    render() {
        const {hero, disbandHero, editName} = this.props
        const {inputName} = this.state
        return (
           <div>Name: {hero.name} Race: {hero.race}
           <input onChange={(e) => this.nameChange(e.target.value)}placeholder='Change Name?'></input>
           <button onClick={() => editName(hero.id, inputName)}>Save Name Change</button>
           <button onClick={() => disbandHero(hero.id)}>Disband?</button>
           </div>
                
        )
    }
}

export default ChosenFollowers