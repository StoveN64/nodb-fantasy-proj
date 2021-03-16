import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Campfire from './Components/Campfire';
import Header from './Components/Header';
import PartyArea from './Components/PartyArea';


class App extends Component {
  constructor(){
    super()
    this.state = {
      hiredHeroes: [],
    }

    this.makeAdventHero = this.makeAdventHero.bind(this)
    this.editName = this.editName.bind(this)
    this.disbandHero= this.disbandHero.bind(this)
  }
  
  makeAdventHero(id){
    if (this.state.hiredHeroes.length < 3){
      axios.post(`http://localhost:4142/api/heroes/${id}`)
        .then(res => {
        // console.log(res.data)
        this.setState({hiredHeroes: res.data})
    })
    .catch(err => console.log(err))
  } else {
  alert("At party limit")
  }
  }

  editName(id, name){
    axios.put(`http://localhost:4142/api/heroes/${id}`, {name})
    .then(res => {
      this.setState({hiredHeroes: res.data})
    })
    .catch(err => console.log(err))
  } 

  disbandHero(id){
    axios.delete(`http://localhost:4142/api/heroes/${id}`)
    .then(res => {
      this.setState({hiredHeroes: res.data})
    })
    .catch(err => console.log(err))
  }


    render(){
      // console.log(this.state.hiredHeroes)
      const hiredIds = this.state.hiredHeroes.map((hero) =>{
        return hero.id
      })
      return (
        <div className="App">
          <Header/>
          <Campfire
            makeAdventHero = {this.makeAdventHero}
            availableHeroes = {this.state.availableHeroes}
            hiredIds= {hiredIds}
          />
          <PartyArea
            hiredHeroes = {this.state.hiredHeroes}
            editName = {this.editName}
            disbandHero = {this.disbandHero}
            />
          
        </div>
      )
    }
}

export default App;
