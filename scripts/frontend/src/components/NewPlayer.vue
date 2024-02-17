<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

  <div class="main-div">
    <div id="closebtn" @click="confirmClose">
        <router-link to="/" id="close">
          <i class="fas fa-times"></i>
        </router-link>
    </div>
    <div class="outerframe">
      <div class="contents">
        <div class="input-div">
          <div class="label">NAME</div>
          <input type="text" v-model="pname" placeholder="Player Name" id="name">
        </div>
        <div class="input-div">
          <div class="label">POSITION</div>
          <select name="positions" id="pos" class="options" v-model="selectedCategory">
            <option value="Attacker" >Attacker</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Goalkeeper">Goalkeeper</option>
          </select>
        </div>
      </div>
      <div class="file-input-container">
        <img src="../../public/images/OIG (1).jpeg" alt="Forever Knights" class="default-profile-pic">
      </div>
    </div>
  </div>

  <div class="main-div" v-if="isphone==true">
    <div id="closebtn" @click="confirmClose">
        <router-link to="/" id="close">
          <i class="fas fa-times"></i>
        </router-link>
    </div>
    <div class="outerframe">
      <div class="file-input-container">
        <img src="../../public/images/OIG (1).jpeg" alt="Forever Knights" class="default-profile-pic">
      </div>
      <div class="contents">
        <div class="input-div">
          <div class="label">NAME</div>
          <input type="text" v-model="pname" placeholder="Player Name" id="name">
        </div>
        <div class="input-div">
          <div class="label">POSITION</div>
          <select name="positions" id="pos" class="options" v-model="selectedCategory">
            <option value="Attacker" >Attacker</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Goalkeeper">Goalkeeper</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Display different blocks based on the selected option -->
    <div v-if="selectedCategory !== ''">
      <div class="radio-class">
        <div v-for="position in positionCategories[selectedCategory]">
          <input type="radio" id="rad" :value="position" v-model="pos" name="'radio_' + position">{{ position }}
        </div>
      </div>
    </div>
    <input type="submit" id="submit" @click="sendData()">
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        namevalid: true,
        pname:"",
        pos:"",
        selectedCategory: "",
        positionCategories: {
          'Goalkeeper': ['GK'],
          'Defender': ['RB', 'LB', 'CB'],
          'Midfielder': ['CDM', 'RM', 'LM', 'CM', 'CAM'],
          'Attacker': ['RW', 'LW', 'CF', 'ST']
        },
        isphone: false,
      }
    },
    mounted() {
    window.addEventListener('resize', this.checkOrientation);
    this.checkOrientation();
  },
    methods:{
      sendData(){
        axios.post("http://localhost:5000/api/addPlayer",{name:this.pname ,poscat:this.selectedCategory,pos:this.pos})
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
        this.pos = ''
        this.selectedCategory = ''
        this.pname = ''
      },
      confirmClose(){
        window.confirm("Are you sure. Entered data will be lost")
      },
      checkOrientation(){
        if (window.matchMedia('(max-width: 700px) and (orientation: portrait)').matches){
          this.isphone =true;
        }
        else{
          this.isphone = false;
        }
      },
    }
  }
</script>

<style>
  @import url("../static/NewPlayer.css");
</style>