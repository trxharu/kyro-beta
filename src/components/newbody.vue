<template>
  <div id="new-body">
    <div class="heading">
      <h1>
        Ready to explore,
        <br />A new exciting journey.
      </h1>
      <p>Create a new account ...</p>
      <router-link to="/serviceAuth/create">Create Now</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newbody"
};
</script>
<style scoped lang="scss">
#new-body {
  position: relative;
  width: 100vw;
  display: flex;
  z-index: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 10vw;
  height: calc(100vh - 120px);
  box-sizing: border-box;
  border-bottom: 1px solid rgb(200, 200, 200);
  .heading {
    width: 100%;
    padding-top: 10vh;
    background: url("../assets/images/altitude-cliffs-cold-2903078.png")
      no-repeat;
    background-size: 65%;
    background-position: bottom right;
    h1 {
      font-size: 3em;
    }
    p {
      padding: 15px;
      font-size: 1.3em;
    }
    a {
      margin-left: 15px;
      display: block;
      padding-top: 10px;
      text-align: center;
      width: 90px;
      height: 25px;
      background: rgb(10, 10, 10);
      border: none;
      font-size: 0.8em;
      color: #fff;
      outline: none;
      cursor: pointer;
      transition: background 0.5s;
    }
    a:hover {
      background: rgb(66, 26, 243);
    }
  }
}
@media only screen and (max-width: 600px) {
  #new-body {
    padding-left: 0;
    padding-top: 60px;
    .heading {
      width: 100%;
      padding-top: 0px;
      padding-left: 0px;
      text-align: center;
      background-size: 150%;
      background-position: bottom right;
      h1 {
        font-size: 2em;
      }
      p {
        padding: 10px 0;
        font-size: 1.2em;
      }
      button {
        margin-left: 0;
      }
      a {
        position: relative;
        margin-left: -45px;
        left: 50%;
      }
    }
  }
}
</style>