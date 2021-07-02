<template>
  <div id="chats">
    <h2>Chats</h2>
    <div class="chat-body">
      <div class="friends">
        <ul>
          <li>
            <div class="friend">
              <div>
                <img src="https://source.unsplash.com/random" />
                <h4>Username</h4>
              </div>
            </div>
          </li>
          <li>
            <div class="friend">
              <div>
                <img src="https://source.unsplash.com/random" />
                <h4>Username</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="chat"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chats"
};
</script>

<style scoped lang="scss">
#chats {
  width: 600px;
  height: 400px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid rgb(210, 210, 210);
  position: fixed;
  bottom: 75px;
  padding: 25px;
  padding-left: 30px;
  left: 45vw;
  box-sizing: border-box;
  z-index: 10;
  box-shadow: 0 0 10px rgb(131, 131, 131);
  h2 {
    opacity: 0.9;
  }
  .chat-body {
    width: 100%;
    margin-top: 25px;
    height: calc(100% - 65px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .friends {
      width: 40%;
      height: 100%;
      box-sizing: border-box;
      border-right: 2px solid rgb(50, 50, 50);
      ul {
        list-style-type: none;
        li {
          display: block;
          width: 100%;
          height: 60px;
        }
      }
      .friend {
        width: 100%;
        height: 50px;
        margin-top: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-bottom: 1px solid rgb(100, 100, 100);
        padding-left: 10px;
        padding-right: 10px;
        div > img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        h4 {
          display: inline-block;
          height: 35px;
          margin-left: 10px;
          opacity: 0.9;
        }
        transition: background 500ms;
      }
      .friend:hover {
        background: rgb(100, 100, 100);
        color: #fff;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  #chats {
    width: 100vw;
    height: 100vh;
    left: 0;
    bottom: 0;
    border-radius: 0;
    .chat-body {
      .friends {
        width: 100%;
      }
    }
  }
}
</style>