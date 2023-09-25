<script>
  export default{
    data(){
      return{
        number_of_players:7,
        addmember:false,
        is_gk: false,
        cant_paly_many_pos: false,
        position:[

        ],
        formation_8:[
          "1-3-2-2",
          "1-3-3-1",
        ],
        formation_9:[
          "1-3-3-2",
          "1-3-2-3",
          "1-3-1-2-2"
        ],
        formation_10:[
          "1-4-3-2",
          "1-4-2-3",
          "1-3-1-2-3",
        ],
        formation_11:[
          "1-4-3-3",
          "1-4-1-2-3",
        ],
        formation_12:[
          "1-4-4-3",
          "1-4-3-4"
        ]
      }
    },
    methods:{
      toggle(){
        if(this.addmember==false){
          this.addmember = true
        }
        else{
          this.addmember = false
        }
      },
      checkPosition(){
        if(this.position.includes("GK")){
          this.is_gk = true
        }
        else{
          this.is_gk = false
        }
        if(this.position.length>2){
          this.cant_paly_many_pos = true
        }
        else{
          this.cant_paly_many_pos = false
        }
        
      }
    }
  }
</script>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mooli&display=swap" rel="stylesheet">
  </head>

  <button @click="toggle">Add Member</button>
  <form action="" v-show="addmember">
    <label for="Player">Name</label>
    <input type="text" name="Player">
    <br>
    <label for="position">Position</label><br>
    <input type="checkbox" v-model="position" value="ATT" @change="checkPosition" :disabled="is_gk">Attacker
    <input type="checkbox" v-model="position" value="MID" @change="checkPosition" :disabled="is_gk">Mid Fielder
    <input type="checkbox" v-model="position" value="DEF" @change="checkPosition" :disabled="is_gk">Defender
    <input type="checkbox" v-model="position" value="GK" @change="checkPosition">Goal Keeper
    <p v-if="is_gk==true">Goal keepers cannot play any other positions</p>
    <p v-if="cant_paly_many_pos==true">
      A player cannot play in more that 2 positions.
    </p>
    <div v-if="this.position.length>1">
      Which Position the player chooses to play

      <input type="range" min="0" max="100">
    </div>    
    <button @click="toggle">Next</button>
  </form>


  <form action="">
    <label for="squad">Number of players</label>
    <input type="range" placeholder="Enter a number" name="squad" v-model="number_of_players" v-on:change="Retrive_Formations()" min="7" max="12">
  </form>

  <h2>Formations</h2>
  <p>The available formations for {{ number_of_players }}</p>
  <div v-if="number_of_players==8" class="formation-div">
    <div class="formations" v-for="x in formation_8">
      <div style="width: 200px; height: 200px;">

      </div>
      <div style="text-align: center;">
        {{ x }}
      </div>
    </div>
  </div>
  <div v-else-if="number_of_players==9" class="formation-div">
    <div class="formations" v-for="x in formation_9">
      <div style="width: 200px; height: 200px;">

      </div>
      <div style="text-align: center;">
        {{ x }}
      </div>
    </div>
  </div>
  <div v-else-if="number_of_players==10" class="formation-div">
    <div class="formations" v-for="x in formation_10">
      <div style="width: 200px; height: 200px;">

      </div>
      <div style="text-align: center;">
        {{ x }}
      </div>
    </div>
  </div>
  <div v-else-if="number_of_players==11" class="formation-div">
    <div class="formations" v-for="x in formation_11">
      <div style="width: 200px; height: 200px;">

      </div>
      <div style="text-align: center;">
        {{ x }}
      </div>
    </div>
  </div>
  <div v-else-if="number_of_players==12" class="formation-div">
    <div class="formations" v-for="x in formation_12">
      <div style="width: 200px; height: 200px;">

      </div>
      <div style="text-align: center;">
        {{ x }}
      </div>
    </div>
  </div>
</template>

<style>
  body{
    background-color: rgb(50, 50, 50);
    color: white;
  }
  h2{
    font-family: Mooli;
  }
  .formations{
    width: 230px;
    height: 230px;
    display: flex;
    flex-direction: column;
    background-color: rgb(134, 24, 24);
    border-radius: 10px;
    text-align: center;
  }
  .formation-div{
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    border-radius: 10px;
    background-color: grey;
    padding: 10px;
    margin: 10px;
    justify-content: space-evenly;
  }
</style>
