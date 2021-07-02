<template>
  <div id="home-page">
    <transition>
      <New v-if="bgblur" @bg="newfinish" />
    </transition>
    <transition>
      <div v-if="bgblur" class="bg"></div>
    </transition>
    <transition>
      <Sidebar v-if="sidebarActive" />
    </transition>
    <HeaderHome
      @clicked="sidebarAct"
      v-bind:username="user.displayName"
      v-bind:avatar="user.photoURL"
    />
    <PostArea />
    <Statuses />
    <transition>
      <Chats v-if="chatbtn" />
    </transition>
    <div @click="openchat" class="chats-btn">
      <img v-if="!chatbtn" src="@/assets/icons/chat-btn.svg" />
      <img v-else src="@/assets/icons/close.svg" />
    </div>
    <Footer />
  </div>
</template>

<script>
import firebase from "firebase";
import HeaderHome from "@/components/homeheader.vue";
import New from "@/components/firsttime.vue";
import PostArea from "@/components/postarea.vue";
import Statuses from "@/components/statuses.vue";
import Footer from "@/components/footer.vue";
import Chats from "@/components/chats.vue";
import Sidebar from "@/components/mobile/sidebar.vue";
export default {
  name: "HomePage",
  components: {
    HeaderHome,
    PostArea,
    Statuses,
    Footer,
    Sidebar,
    New,
    Chats
  },
  methods: {
    sidebarAct() {
      this.sidebarActive = this.sidebarActive ? false : true;
    },
    newfinish() {
      this.bgblur = false;
    },
    openchat() {
      this.chatbtn = this.chatbtn ? false : true;
    }
  },
  data() {
    return {
      sidebarActive: false,
      bgblur: true,
      user: {
        displayName: "Username",
        photoURL: "https://source.unsplash.com/random"
      },
      chatbtn: false
    };
  },
  created: function() {
    document.title = "Home | Kyro";
    const user = firebase.auth().currentUser;
    this.user.displayName = user.displayName;
    this.user.photoURL = user.photoURL;
    if (user.displayName !== null) {
      this.bgblur = false;
    }
  }
};
</script>

<style lang="scss">
@import "../stylesheets/theme-main.scss";
#home-page {
  box-sizing: border-box;
  .bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 14;
    opacity: 0.5;
    background: #000;
  }
  .chats-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: fixed;
    bottom: 50px;
    left: 90vw;
    background: #000;
    cursor: pointer;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 15px rgb(80, 80, 80);
    img {
      filter: invert(1);
    }
  }
  .chats-btn:hover {
    box-shadow: 0 0 15px rgb(1, 80, 100);
  }
}
@media only screen and (max-width: 600px) {
  #home-page {
    .chats-btn {
      bottom: 50px;
      left: 75vw;
    }
  }
}
</style>