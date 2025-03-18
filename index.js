// const basket = require("./basket")

// basket.addItem({name: "apple", price: 4.00})
// console.log(basket.items);

const express = require("express")

// something i need to read up on (se video):
const app = express()

// get("hvor i browseren vi gerne vil hen", en function(request, response)):
app.get("/", function(req,res){
    // "/" svarer til root
    res.send("Hello, people")
})

// vi sætter app til at lytte på http port der hedder 3000 (3000 er ledig og bruges meget til next og react):
app.listen(3000)

