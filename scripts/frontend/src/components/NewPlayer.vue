<template>
  <div class="main-div">
    <div class="input-div">
      <div class="label">NAME</div>
      <span class="invalid" v-if="namevalid==false">No special characters</span>
      <input type="text" v-model="pname" placeholder="Enter Player Name" @input="validateName()">
    </div>
    <div class="input-div">
      <div class="label">POSITION</div>
      <select name="postitions" id="pos" class="options" multiple>
        <option value="ST">ST</option>
        <option value="LW">LW</option>
        <option value="RW">RW</option>
        <option value="CAM">CAM</option>
        <option value="LM">LM</option>
        <option value="CM">CM</option>
        <option value="RM">RM</option>
        <option value="CDM">CDM</option>
        <option value="LB">LB</option>
        <option value="CB">CB</option>
        <option value="RB">RB</option>
        <option value="GK">GK</option>
      </select>
      <p>{{ pos }}</p>
    </div>
  </div>
</template>

<style>
  .main-div{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 300px;
    background-color: rgb(161, 196, 205);
    padding: 20px;
    padding-left: 80px;
    border-radius: 35px;
  }
  .label{
    display: block;
  }
  .invalid{
    display: block;
  }
  .options{
    width: 200px;
    scroll-behavior: smooth;
    scrollbar-width: thin;
  }
  select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    outline: none; 
    cursor: pointer;
  }

  option {
    padding: 8px;
    font-size: 14px;
    background-color: #fff;
    color: #333;
  }

  option:hover {
    background-color: #f0f0f0;
  }


  option:checked {
    background-color: #e0e0e0;
    color: #000;
  }
</style>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        namevalid: true,
        pname:"",
        pos:[]
      }
    },
    methods:{
      validateName(){
        const exp = /^[A-Za-z]+$/
        var v = exp.test(this.pname)
        if (this.pname=="" || v==true){
          this.namevalid = true
        }
        else{
          this.namevalid = false
        }
      },
      sendData(){
        axios.post("http://localhost:5000/api/addPlayer",{name:'Thanus',poscat:"Defender",pos:"RB"})
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>