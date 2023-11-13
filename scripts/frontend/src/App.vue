<template>
  <div class="navbar">
    <router-link to="/newplayer" class="link">New Player</router-link>
  </div>
  <router-view></router-view>
</template>

<style>
  body{
    margin: 5px;
  }

  .navbar{
    background-color: rgb(196, 196, 196);
    margin: 5px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    vertical-align: middle;
    border-radius: 10px;
    height: 40px;
  }
  .link{
    color: black;
    text-decoration: none;
    margin-top: 5px;
  }
</style>

<script>
  import axios from "axios"
  axios.get("http://localhost:5000/")
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
</script>