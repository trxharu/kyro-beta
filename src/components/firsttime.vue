<template>
  <div id="first">
    <h2>Just a few things more</h2>
    <div class="user-select">
      <label>Pick a username:</label>
      <input type="text" placeholder="Enter a Username" v-model="username" required />
    </div>
    <div class="image-select">
      <img v-bind:src="photoUrl" />
      <label for="file-upload" class="fileupload">
        <img src="@/assets/icons/upload.svg" />
      </label>
      <input id="file-upload" type="file" accept="image/jpg, image/png" @change="showphoto" />
    </div>
    <button @click="submitted">Finish</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "New",
  methods: {
    submitted() {
      let photoFile = document.querySelector("#file-upload").files[0];
      const user = firebase.auth().currentUser;
      const avatarStgRef = firebase
        .storage()
        .ref("kyrians/" + user.uid + "/avatar");
      if (photoFile !== undefined || this.username !== "") {
        avatarStgRef.put(photoFile).then(
          function(snap) {
            snap.ref.getDownloadURL().then(
              function(url) {
                user.updateProfile({
                  photoURL: url,
                  displayName: this.username
                });
              }.bind(this)
            );
            this.$emit("bg");
          }.bind(this)
        );
      }
    },
    showphoto() {
      let file = document.querySelector("#file-upload").files[0];
      if (file !== undefined) {
        let _PREVIEW_URL = URL.createObjectURL(file);
        this.photoUrl = _PREVIEW_URL;
      }
    }
  },
  data() {
    return {
      username: "",
      photoUrl: "https://source.unsplash.com/random"
    };
  }
};
</script>
<style scoped lang="scss">
#first {
  position: fixed;
  z-index: 15;
  width: 600px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  transform: translateX(-300px);
  background: #fff;
  border-radius: 10px;
  padding-left: 30px;
  padding-top: 20px;
  padding-right: 30px;
  border: 1px solid rgb(210, 210, 210);
  h2 {
    color: rgb(70, 70, 70);
  }
  .user-select {
    text-align: center;
    margin-top: 50px;
    label {
      font-weight: 500;
    }
    input {
      margin-left: 10px;
      height: 28px;
      width: 200px;
      background: rgb(200, 200, 200);
      outline: none;
      border: none;
      font-family: Raleway;
      padding-left: 10px;
      padding-right: 10px;
      transition: outline 500ms;
    }
    input:focus {
      outline: 2px solid black;
    }
  }
  .image-select {
    box-sizing: border-box;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    .fileupload {
      width: 200px;
      height: 120px;
      display: block;
      color: rgb(49, 49, 49);
      background: rgb(220, 220, 220);
      font-weight: 500;
      cursor: pointer;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      text-align: center;
      img {
        width: 60px;
        opacity: 0.5;
        border-radius: 0;
        transition: opacity 500ms;
      }
    }
    .fileupload:hover {
      img {
        opacity: 1;
      }
    }
    input[type="file"] {
      display: none;
    }
  }
  button {
    width: 80px;
    height: 30px;
    margin-top: 50px;
    margin-left: calc(100% - 200px);
    background: none;
    color: #000;
    cursor: pointer;
    border: 2px solid black;
    transition: background 500ms;
  }
  button:hover {
    background: #000;
    color: #fff;
  }
}
@media only screen and (max-width: 600px) {
  #first {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin-top: 0;
    transform: translateX(0);
    box-sizing: border-box;
    border-radius: 0;
    h2 {
      margin-top: 50px;
    }
    .user-select {
      input {
        margin-top: 10px;
      }
    }
    .image-select {
      padding-left: 20px;
      padding-right: 20px;
      img {
        width: 80px;
        height: 80px;
      }
      .fileupload {
        width: 100px;
        height: 70px;
        img {
          width: 40px;
        }
      }
    }
    button {
      margin-left: calc(100% - 100px);
    }
  }
}
</style>