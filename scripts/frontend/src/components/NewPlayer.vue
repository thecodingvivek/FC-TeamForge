<template>
  <div class="main-div">
    <div class="input-div">
      <div class="label">NAME</div>
      <span class="invalid" v-if="namevalid==false">No special characters</span>
      <input type="text" v-model="pname" placeholder="Enter Player Name" @input="validateName()" class="input-name">
    </div>
    <div class="input-div">
      <div class="label">POSITION</div>
      <div class="options-div">
        <div class="att">
          <div><input type="radio">ST</div>
          <div><input type="radio">RW</div>
          <div><input type="radio">LW</div>
        </div>
        <div class="mid">
          <div><input type="radio">CAM</div>
          <div><input type="radio">CM</div>
          <div><input type="radio">CDM</div>
        </div>
        <div class="def">
          <div><input type="radio">RB</div>
          <div><input type="radio">CB</div>
          <div><input type="radio">LB</div>
          <div><input type="radio">GK</div>        
        </div>
      </div>
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
    padding: 30px;
    border-radius: 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    z-index: 5;
  }
  .label{
    display: block;
    background-color: #f0f0f0;
    width: 200px;
    padding: 4px;
    font-size: 15px;
    border-radius: 3px;
    margin: 3px;
  }
  .invalid{
    display: block;
    margin: 5px;
  }
  .input-name{
    border: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    margin: 5px;
    
  }
  .input-name:focus{
    outline: none;
  }
  .att,.mid,.def{
    display: flex;
    flex-direction: row;
    margin: 5px;
    padding: 2px;
    border-radius: 3px;
  }
  .att:hover,.mid:hover,.def:hover{
    background-color: rgb(150, 181, 182);
  }
  .att{
    column-gap: 40px;
  }
  .mid{
    column-gap: 25px;
  }
  .def{
    column-gap: 37px;
  }
  .options-div{
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    margin-top: 5px;
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