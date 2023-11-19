<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

  <div class="main-body">
    <div class="formation-list">
      <div v-for="formation in formationquery">
        <div class="available-formation">
          <input type="radio" value="{{ formation }}">
          <label for="{{ formation }}">{{ formation }}</label>
        </div>
      </div>
      <div class="generate">Generate</div>
    </div>

    <div class="output-frame">
      <div class="team-formation">

      </div>
      <div class="team-formation">

      </div>
    </div>

    <div class="available-players">
      <input type="search" class="search" placeholder="Search">
      <div class="filter-class">
        <div class="filter-text"><p>Filter</p></div>
        <div v-for="position in positionFilter">
          <div class="position">{{ position }}</div>
        </div>
      </div>
      <div class="result-body">
        <div v-for="player in playerquery">
          <div class="player-query">
            {{ playerquery[1] }}
            <input type="checkbox">
          </div>
        </div>
      </div>
      <div class="mid-section">
        <div class="avail-text">
          <p>Available Players</p>
          <div class="playercount">{{ playercount }}</div>
        </div>
        <div class="submit">
          <i class="fas fa-check"></i>
        </div>
      </div>
      <div class="available-body">
        <div v-for="player in selectedplayers">
          <div class="selected-player">
            {{ playerquery[1] }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="addPlayer" @mouseover="showAddPlayerText(true)" @mouseout="showAddPlayerText(false)">
    <router-link to="/newplayer" class="link-newplayer">
      <i class="fas fa-plus"></i>
    </router-link>
    <div class="hoverText" :class="{ 'show': isAddPlayerHovered }"><p>Add New </p><p>Player</p></div>
  </div>
  <div class="viewDatabase" @mouseover="showViewDatabaseText(true)" @mouseout="showViewDatabaseText(false)">
    <router-link to="/database" class="link-database">
      <i class="fas fa-database"></i>
    </router-link>
    <div class="hoverText" :class="{ 'show': isViewDatabaseHovered }"><p>View</p><p>Database</p></div>
  </div>
  <router-view></router-view>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600&display=swap');
  body {
    margin: 5px;
    font-family: 'Poppins', sans-serif;
  }

  .formation-list{
    display: flex;
    flex-direction: row;
    column-gap: 20%;
    max-width: 1100px;
    max-height: 200px;
    margin: 10px;
    padding: 10px;
    align-items: center;
    color: #fff;
  }

  .available-players{
    position: fixed;
    top: 3%;
    right: 2%;
    height: 75%;
    width: 320px;
    max-width: 320px;
    min-width: 265px;
    background-color: #9BDEAC;
    border-radius: 15px;
  }

  .search{
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
  }

  .filter-class{
    display: flex;
    flex-direction: row;
    column-gap: 5%;
    margin-left: 5%;
    margin-top: 5%;
  }

  .filter-text{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5%;
  }

  .filter-text p{
    margin: 0px;
  }

  .position{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #851d30;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s;
  }

  .position:hover{
    transform: scale(1.1);
  }

  .position:active{
    opacity: .7;
  }

  .result-body{
    width: 90%;
    height: 25%;
    overflow-y: auto;
    background-color: #fff;
    margin-top: 5%;
    margin-left: 5%;
    border-radius: 15px;
  }

  .mid-section{
    display: flex;
    flex-direction: row;
    column-gap: 20%;
    align-items: center;
    justify-content: center;
    margin-right: 5%;
    margin-left: 10%;
  }

  .avail-text{
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .playercount{
    background-color: #EAD3C1;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .submit{
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background-color: #851d30;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s;
  }

  .submit:hover{
    transform: scale(1.1);
  }

  .submit:active{
    opacity: .7;
  }

  .available-body{
    width: 90%;
    height: 40%;
    overflow-y: auto;
    background-color: #fff;
    margin-left: 5%;
    border-radius: 15px;
  }

  .addPlayer {
    position: fixed;
    bottom: 3%;
    right: 5%;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #851d30;
    color: #fff;
    font-size: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
  }

  .addPlayer:hover {
    transform: scale(1.1);
  }

  .addPlayer:active{
    opacity: .7;
  }

  .addPlayer i {
    font-size: 28px;
  }

  .viewDatabase {
    position: fixed;
    bottom: 3%;
    right: 13.5%;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #851d30;
    color: #fff;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
  }

  .viewDatabase:hover {
    transform: scale(1.1);
    background-color: #851d30;
  }

  .viewDatabase:active{
    opacity: .7;
  }

  .viewDatabase i {
    font-size: 28px;
  }


  .link-newplayer {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link-database {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hoverText {
    position: absolute;
    bottom: 110%;
    right: 10%;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    color: #1c1c1c;
    white-space: nowrap;
    opacity: 0;
    text-align: center;
    transition: opacity 0.2s;
    pointer-events: none;
  }

  .hoverText p{
    margin: 0px;
    font-weight: 100;
  }

  .show {
    opacity: 1;
  }


</style>

<script>
  export default {
    data() {
      return {
        isAddPlayerHovered: false,
        isViewDatabaseHovered: false,
        positionFilter: ['A', 'M', 'D', 'G'],
        playercount: 14,

      };
    },
    methods: {
      showAddPlayerText(state) {
        this.isAddPlayerHovered = state;
      },
      showViewDatabaseText(state) {
        this.isViewDatabaseHovered = state;
      },
    },
  };
</script>
