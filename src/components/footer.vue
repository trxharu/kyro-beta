<template>
  <div id="footer">
    <div class="foot-logo">
      <img src="../assets/logo.svg" />
    </div>
    <div class="additional">Data Protection&nbsp;&nbsp;&nbsp;&nbsp;About Us</div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
#footer {
  position: relative;
  width: 100vw;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 2.4vh;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  .foot-logo {
    width: 65px;
    opacity: 0.5;
    img {
      height: 18px;
    }
  }
  .additional {
    opacity: 0.5;
    font-size: 0.8em;
    transition: opacity 0.5s;
  }
  .additional:hover {
    opacity: 1;
  }
}
</style>