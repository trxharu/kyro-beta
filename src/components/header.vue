<template>
  <div id="header">
    <div class="main-logo">
      <img src="../assets/logo_b.svg" />
    </div>
    <div class="btn">
      <router-link to="/serviceAuth/login">Log In</router-link>
      <router-link to="/serviceAuth/create">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "hello"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgb(210, 210, 210);
  box-sizing: border-box;
  padding: 10px;
  padding-left: 10vw;
  .main-logo {
    padding-top: 5px;
    img {
      cursor: pointer;
      height:25px;
     
    }
  }
  .btn {
    align-self: center;
    a {
      display: inline-block;
      text-align: center;
      color: #000;
      width: 70px;
      height: 20px;
      margin-left: 10px;
      background: none;
      outline: none;
      padding-top: 5px;
      border: 1px solid black;
      font-weight: 600;
      transition: background 0.5s;
      font-size: 0.8em;
      cursor: pointer;
    }
    a:hover {
      background: rgb(10, 10, 10);
      color: #fff;
    }
  }
  padding-right: 10vw;
}
@media only screen and (max-width: 600px) {
  #header{
    height:50px;
    padding:5px 5vw;
    .main-logo{
       padding-top: 10px;
      img{ 
        height: 20px;
      }
    }
    .btn{
      padding-top:5px;
      a{
        width:60px;
        padding-top:4px;
        height:20px;
      }
    }
  }
} 
</style>
