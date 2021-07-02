<template>
  <div class="post">
    <div class="post-head">
      <div class="profile-info">
        <img src="https://source.unsplash.com/random" />
        <h4>Username</h4>
      </div>
      <p>28 min ago</p>
    </div>
    <div class="post-body">
      <img src="https://source.unsplash.com/random" />
    </div>
    <div class="post-footer">
      <div class="like-comment">
        <img src="@/assets/icons/heart-btn.svg" />
        <p>23</p>
        <img src="@/assets/icons/chat.svg" />
        <p>2</p>
      </div>
      <button class="btn">
        <img src="@/assets/icons/more.svg" />
      </button>
    </div>
    <div class="post-info">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipdoloribus aliqro accusamus, quaerat, praesentium laboriosam maiores.
        <strong>more...</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post"
};
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  min-height: 250px;
  margin-bottom: 5px;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 10px;
  box-sizing: border-box;
  .post-head {
    width: 100%;
    height: 60px;
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    .profile-info {
      width: 200px;
      img {
        height: 40px;
        width: 40px;
        cursor: pointer;
        border-radius: 50%;
        transition: filter 500ms;
      }
      img:hover {
        filter: brightness(0.7);
      }
      h4 {
        width: 80px;
        height: 20px;
        padding-left: 10px;
        opacity: 0.8;
        padding-bottom: 10px;
        display: inline-block;
        transition: color 500ms;
        cursor: pointer;
      }
      h4:hover {
        color: rgb(50, 50, 50);
      }
    }
    p {
      opacity: 0.5;
      font-size: 0.8em;
    }
  }
  .post-body {
    margin: 5px 20px;
    min-height: 200px;
    border-radius: 20px;
    object-fit: scale-down;
    img {
      width: 100%;
      height: 50%;
    }
  }
  .post-footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    .like-comment {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100px;
      img {
        width: 20px;
        opacity: 0.7;
        transition: opacity 500ms;
        cursor: pointer;
      }
      p {
        padding-right: 10px;
        opacity: 0.7;
      }
      img:hover {
        opacity: 1;
      }
    }
    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 500ms;
      img {
        width: 24px;
      }
    }
    button:hover {
      opacity: 1;
    }
  }
  .post-info {
    width: 100%;
    font-size: 0.9em;
    height: 60px;
    padding-left: 30px;
    box-sizing: border-box;
    padding-right: 30px;
    font-weight: 400;
  }
}
</style>