
const ctrl = require('./controller')
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());


// get for party list
app.get('/api/adventurers', ctrl.getCampfire)

// get for indiv advents.
app.get('/api/follower', ctrl.getFollower)

// get for followers list
app.get('/api/heroes', ctrl.getFollowers)

// post= add to party list
app.post('/api/heroes/:id', ctrl.hireHero)

// put= update/edit name
app.put('/api/heroes/:id', ctrl.editHero)

// delete= disbanding party members
app.delete('/api/heroes/:id', ctrl.disbandHero)


app.listen(4142, () => console.log (`Server is running on 4142`))
