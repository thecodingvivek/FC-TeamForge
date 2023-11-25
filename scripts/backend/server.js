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
    const {name, poscat, pos} = req.body
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
            res.status(402).json({"Error":"Player Already Exist"})
            return;
        }
        else{
            console.log("Insertion Successful !")
            res.status(200).json({"Status":"Insertion Successful"})
        }    
        })}
})

app.get('/api/search_player',(req,res)=>{
    let str = req.query.str
    const present_p = [req.query.present_players]
    let q;
    if(req.query.present_players==null || req.query.present_players==undefined || req.query.present_players==[]){
        if(str!=''){
            str = str+'%'
            q="SELECT distinct(name) FROM Players WHERE name like ?;"
            con.query(q,[str],(error,result)=>{
                if(error){
                    console.log(error)
                    res.status(400).json({"Error":"Mysql server error"})
                }
                else{
                    console.log(result)
                    res.status(200).json(result)
                }
            })
        }
        else{
            res.status(400).json({"message":"Enter String"})
        }
    }
    else{
        if(str!=''){
            str = str+'%'
            q="SELECT distinct(name) FROM Players WHERE name like ? AND name NOT IN ?;"
            con.query(q,[str,present_p],(error,result)=>{
                if(error){
                    console.log(error)
                    res.status(400).json({"Error":"Mysql server error"})
                }
                else{
                    console.log(result)
                    res.status(200).json(result)
                }
            })
        }
        else{
            res.status(400).json({"message":"Enter String"})
        }
    }
})

app.get('/api/player_by_category',(req,res)=>{
    const cat = req.query.category
    const present_p = [req.query.present_players]
    let q;
    if(req.query.present_players==null || req.query.present_players==undefined || req.query.present_players==[]){
        q = "SELECT name FROM players WHERE positioncategory = ?;"
        con.query(q,[cat],(error,result)=>{
            if(error){
                console.log(error)
                res.status(400).json(error)
            }
            else{
                console.log(result)
                res.status(200).json(result)
            }
        })
    }
    else{
        q = "SELECT name FROM players WHERE positioncategory = ? AND name NOT IN ?;"
        con.query(q,[cat,present_p],(error,result)=>{
            if(error){
                console.log(error)
                res.status(400).json(error)
            }
            else{
                console.log(result)
                res.status(200).json(result)
            }
        })
    }
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

app.get('/api/formations',(req,res)=>{
    const player_n = req.query.no_p
    q="SELECT formation FROM formations WHERE no_of_players=?;"
    con.query(q,[player_n],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            formations = result.map(item=>item.formation)
            console.log(formations)
            res.status(200).json(formations)
        }
    })
})

app.listen(5000, ()=> {
    console.log("Listening on port 5000")
})
