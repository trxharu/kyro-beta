<template>
  <div class="home">
    <Header />
    <Newbody />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import Newbody from "@/components/newbody.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "home",
  components: {
    Header,
    Newbody,
    Footer
  }
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,400i,500,600,700,800&display=swap");

body,
button {
  font-family: "Raleway", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
}
a {
  text-decoration: none;
}
</style>