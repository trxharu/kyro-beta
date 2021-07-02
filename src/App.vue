<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  #app {
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.2s;
    }
    .v-enter, .v-leave-to {
      opacity: 0;
    }
  }
</style>
