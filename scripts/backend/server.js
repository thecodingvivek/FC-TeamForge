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


app.post("/api/addPlayer", (req, res)=>{
    let data = req.body;
    console.log(req.body)
    q = "INSERT INTO Players(?,?,?);"
    con.query(q,[data.name, data.poscat, data.pos],(err,result)=>{
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
