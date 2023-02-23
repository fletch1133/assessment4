let furnitures = require('./db.json')
let furnitureId = 4

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFurniture: (req,res) => {
        res.status(200).send(furnitures)
    },
    addFurniture: (req,res) => {
        bought.push(req.body)
        status(200).send(furnitures)
    },
    changeSold: (req,res) => {
        let { index } = req.body
        furnitures[+index].bought = !furnitures[+index].bought
        res.status(200).send(furnitures) 
    },
    deleteFurniture: (req,res) => {
        let { index } = req.params
        bought.splice(+index,1)
        res.status(200).send(places)
    }

}