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
      }
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
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600&display=swap');
  body{
    font-family: 'Poppins', sans-serif;
  }

  .main-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  width: 400px;
  background-color: #9BDEAC;
  padding: 20px;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  }

  #closebtn{
    background-color: #851d30;
    color: #fff;
    height: 25px;
    width: 25px;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: -1.5%;
    right: -1.5%;
    transition: all 0.1s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #closebtn:hover{
    transform: scale(1.15);
  }

  #close{
    text-align: center;
    text-decoration: none;
    color: #fff;
  }

  .outerframe{
    display: flex;
    flex-direction: row;
    column-gap: 20px;
  }

  .default-profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  .label{
    display: block;
    margin: 10px;
  }
  .options {
    width: 200px;
  }

  input{
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    color: #333;
    outline: none;
    width: 180px;
  }

  #rad{
    width:auto;
    margin-right:5px;
  }

  #submit{
    width: 100px;
    background-color: #851d30;
    color: #fff;
    border-radius: 30px;
  }
  #submit:hover{
    opacity: 0.9;
  }
  #submit:active{
    opacity:1.2;
  }
  .contents{
    align-content: center;
  }

  select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    color: #333;
    outline: none;
    cursor: pointer;
  }

  option {
    padding: 10px;
    font-size: 16px;
    background-color: #fff;
    color: #333;
  }

  option:checked {
    background-color: #e0e0e0;
    color: #000;
  }

  .radio-class {
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  height: 50px;
  width: 375px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #851d30;
  color: #fff;
  padding: 10px;
  }


</style>