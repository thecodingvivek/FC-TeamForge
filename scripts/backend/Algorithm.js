const { createConnection } = require("./sqlconnect");
const con = createConnection();

teams={0:{},1:{}}

const defender = {
  2:["CB","CB"],
  3:["LB","CB","RB"],
  4:["LB","CB","CB","RB"]
}
const midfielder = {
  1:["CM"],
  2:["CM","CM"],
  3:["LM","CM","RM"],
  4:["CAM","CM","CM","CDM"]
}
const attacker = {
  1:["ST"],
  2:["ST","ST"],
  3:["LW","ST","RW"],
  4:["LW","ST","ST","RW"]
}

function formTeams(players, formation){
  for(let i of players){
    con.query("SELECT name, position, positioncategory as catgry FROM players WHERE name=?",[i],(err,result)=>{
      if(err) console.error(err)
      else{
        console.log(result)
        for(let j of result){
          if(j.catgry.lower() == "goalkeeper"){
            //select a random number 1 or 2
            let selectedTeam;
            var randomNumber = Math.random();
            if(randomNumber<0.5) selectedTeam = 0
            else selectedTeam = 1
            if(selectedTeam["GK"]){
              
            }
          }
        }
      }
    })

  }
}