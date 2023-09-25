<script>
  export default{
    data(){
      return{
        number_of_players:7,
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
      Retrive_Formations(){

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
