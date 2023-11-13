const express = require("express")
const sql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())

const con = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"2005",
    database:"FC"
})

con.connect((error)=>{
    if (error){
        console.error("Coudn't conenct to SQL Database")
    }
    else{
        console.log("Connected to SQL Database")
    }
})


app.get("/", (req, res)=>{
    res.send({state:"Good"})
})

app.listen(5000, ()=> {
    console.log("Listening on port 5000")
})
