<template>
  <div id="statuses">
    <div class="status-header">
      <p>See, what are they doing</p>
      <button>View All</button>
    </div>
    <div class="stat">
      <Status />
      <Status />
      <Status />
    </div>
  </div>
</template>

<script>
import Status from "@/components/statusbody.vue";
export default {
  name: "Statuses",
  components: {
    Status
  }
};
</script>

<style scoped lang="scss">
#statuses {
  width: 400px;
  height: 135px;
  display: block;
  position: fixed;
  left: 50%;
  transform: translateX(11vw);
  top: 70px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid rgb(210, 210, 210);
  .status-header {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    p {
      font-size: 0.9em;
      font-weight: 600;
    }
    button {
      background: rgb(220, 220, 220);
      border: none;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 0.6em;
      cursor: pointer;
      transition: background 500ms;
    }
    button:hover {
      background: rgb(50, 50, 50);
      color: #fff;
    }
  }
  .stat {
    width: 100%;
    height: 80px;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
  }
}
@media only screen and (max-width: 600px) {
  #statuses {
    position: absolute;
    width: 100vw;
    height: 135px;
    top: 55px;
    left: 0;
    transform: translateX(0);
  }
}
</style>