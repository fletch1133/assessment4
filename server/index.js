const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFurniture, addFurniture, changeSold, deleteFurniture} = require('./controller');
const { application } = require("express");

app.get("/api/compliment", getCompliment);
app.get('/api/furnitures', getFurniture);
app.post('/api/furnitures', addFurniture);
app.put('/api/furnitures', changeSold);
app.delete('/api/furnitures/:index', deleteFurniture)


app.listen(4000, () => console.log("Server running on 4000"));
