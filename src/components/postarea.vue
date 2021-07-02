<template>
  <transition>
    <div id="post-body">
      <Post />
      <Post />
    </div>
  </transition>
</template>

<script>
import Post from "@/components/post.vue";
export default {
  name: "PostArea",
  components: {
    Post
  }
};
</script>

<style scoped lang="scss">
#post-body {
  position: relative;
  left: 50%;
  transform: translateX(-40vw);
  width: 50vw;
  z-index: 0;
  box-sizing: border-box;
  min-height: 80vh;
  margin-top: 70px;
  overflow-y: hidden;
  box-sizing: content-box;
}
@media only screen and (max-width: 600px) {
  #post-body {
    left: 0;
    transform: translateX(0);
    width: 100vw;
    margin-top: 195px;
  }
}
</style>