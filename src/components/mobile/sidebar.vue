<template>
  <div id="sidebar">This is sidebar</div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped lang="scss">
#sidebar {
  width: 60vw;
  height: 100vh;
  position: fixed;
  z-index: 11;
  left: 0;
  top: 0;
  background: #000;
}
</style>