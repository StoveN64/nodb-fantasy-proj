const {advents} = require('./info.js');
let list = [];

module.exports = {
    
    getCampfire: (req, res) => {
        const aList = [];
        for( let i = 0; i < advents.length; i++){
            aList.push(adventurers[i])
        }
        res.status(200).send(aList)
    },

    getFollower: (req, res) => {
        const {id} = req.params;
        const hero = advents.find(players => players.id === +id)
        if (!hero){
            res.status(400).send('Could not find hero')
        }
        res.status(200).send(hero)
    },

    
    getFollowers: (req, res) => {
        res.status(200).send(advents)
    },

    hireHero: (req, res) => {
        const {id} = req.params;
        const hero = advents.find(players => players.id === +id)
        list.push(hero)
        res.status(200).send(list)
    },

    editHero: (req, res) =>{
        const {id} = req.params;
        const {name} = req.body;
        const heroes = list.map((hero) => {
           if( hero.id == id){
               const newObject = {...hero}
               newObject.name = name
               return newObject
           } 
           return hero
        })
        console.log(name)
        console.log(id)
        res.status(200).send(heroes)
    } ,

    disbandHero: ( req, res) => {
        const {id} = req.params;
        const newList = list.filter((hero) => {
            if( hero.id != id ){
                return hero
            }
        })
        list = newList
        res.status(200).send(newList)
    }
}