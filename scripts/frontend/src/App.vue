<template>
  <div class="addPlayer" @mouseover="showText(true)" @mouseout="showText(false)">
    <router-link to="/newplayer" class="link">+</router-link>
    <div class="hoverText" :class="{ 'show': isHovered }">Add New Player</div>
  </div>
  <router-view></router-view>
</template>

<style>
  body {
    margin: 5px;
  }

  .addPlayer {
    position: fixed;
    bottom: 3%;
    right: 2%;
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
    transition: width 0.2s, height 0.2s, right 0.2s, bottom 0.2s;
  }

  .addPlayer:hover {
    bottom: 2.5%;
    right: 1.5%;
    width: 80px;
    height: 80px;
  }

  .link {
    color: #fff;
    text-decoration: none;
  }

  .hoverText {
    position: absolute;
    bottom: 30%;
    right: 115%;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: #1c1c1c;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
  }

  .show {
    opacity: 1;
  }
</style>

<script>
  export default {
    data() {
      return {
        isHovered: false,
      };
    },
    methods: {
      showText(state) {
        this.isHovered = state;
      },
    },
  };
</script>
