const express = require("express")
const bodyParser = require('body-parser');
const cors = require("cors")
const {createConnection} = require('./sqlconnect')
const {positions ,assignpos} = require('./Algorithm')
const app = express()
app.use(cors())
app.use(bodyParser.json());

const con = createConnection()

app.post("/api/addPlayer", (req, res)=>{
    const name = req.body.map(item => item.name)
    const pos = req.body.map(item => item.pos)
    const poscat = req.body.map(item => item.poscat)
    console.log(name,pos,poscat)
    q = "INSERT INTO Players(name,positionCategory,position) values(?,?,?);"
    if(name==null || poscat==null || pos==null){
        res.status(400).json({"Error":"Wrong or No parameters passed"})
        console.log("Wrong parameters provided")
    }
    else{
        con.query(q,[name, poscat, pos],(err,result)=>{
        if(err){
            console.error(err)
            return;
        }
        else{
            console.log("Insertion Successful !")
            res.status(200).json({"Status":"Insertion Successful"})
        }    
        })}
})

app.get('/api/available_player',(req,res)=>{
    q="SELECT distinct(name) FROM Players;"
    con.query(q,(error,result)=>{
        if(error){
            console.log(error)
            res.status(400).json({"Error":"Mysql server error"})
        }
        else{
            console.log(result)
            res.status(200).json(result)
        }
    })
})

app.post('/api/get_my_players',(req,res)=>{
    let name = req.body.map(item => item.name)
    q = "SELECT distinct(name), position, positioncategory FROM Players where name in ?"
    con.query(q,[name],(error,result)=>{
        if(error){
            console.log(error)
            res.status(400).json({"Error":"Mysql server error"})
        }
        else{
            res.status(200).json(result)
        }
    })
})

app.get('/api/show_database',)

app.listen(5000, ()=> {
    console.log("Listening on port 5000")
})
