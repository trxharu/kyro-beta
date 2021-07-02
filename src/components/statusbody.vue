<template>
  <div class="status">
    <img src="https://source.unsplash.com/random" />
    <p>User</p>
  </div>
</template>

<script>
export default {
  name: "Status"
};
</script>

<style scoped lang="scss">
.status {
  margin-left: 10px;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    padding: 2px;
    border: 1px solid rgb(70, 70, 70);
    border-radius: 10px;
    transition: filter 500ms;
  }
  img:hover {
    filter: brightness(0.6);
  }
  p {
    width: 44px;
    text-align: center;
    font-size: 0.8em;
    font-weight: 600;
    overflow: hidden;
  }
}
</style>