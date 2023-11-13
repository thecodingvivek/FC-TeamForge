const express = require("express")
const sql = require("mysql2")
const bodyParser = require('body-parser');
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json());

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


app.post("/api/addPlayer", (req, res)=>{
    console.log(req.body)
    q = "INSERT INTO Players(name,positionCategory,position) values(?,?,?);"
    con.query(q,[req.body.name, req.body.poscat, req.body.pos],(err,result)=>{
        if(err){
            throw err
        }
        else{
            console.log("Insertion Successful !")
        }
    })
})

app.listen(5000, ()=> {
    console.log("Listening on port 5000")
})
