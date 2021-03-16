import axios from "axios"
import React, { Component } from 'react'
import AvailableFinder from "./AvailableFinder"

export class Campfire extends Component {
    constructor(props){
        super(props)
        this.state = {
            availableHeroes: []
        }
    }

    componentDidMount(){
    axios.get('http://localhost:4142/api/heroes')
    .then(res => {    
    this.setState({availableHeroes: res.data})
  })
  .catch(err => console.log(err))
}


render() {
  const namedHeroes = this.state.availableHeroes.map((hero) => {
          if(!this.props.hiredIds.includes(hero.id)){
           return <AvailableFinder 
           hero={hero}
           makeAdventHero = {this.props.makeAdventHero}
           key = {hero.id} 
           />
          }
          return false
        })
        return (
           <div>
            {namedHeroes}
           </div>
        
        )
    }
}

export default Campfire

