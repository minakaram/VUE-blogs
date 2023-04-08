<template>
  <div class="singleBlog" v-if="blog">
    <AppHeader>
      <h1>{{ blog.title }}</h1>
    </AppHeader>
    <div class="blog-container">
      <div class="blog-img">
        <img :src=blog.iamge alt="" />
      </div>
      <h2>{{ blog.title }}</h2>
      <p class="blog-summary">
        {{ blog.summary }}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        repellat asperiores at, quas provident quos consequatur aliquam
        voluptates iste possimus atque, perspiciatis quisquam error velit
        placeat! Id, mollitia. Repellat, commodi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consectetur repellat asperiores at, quas
        provident quos consequatur aliquam voluptates iste possimus atque,
        perspiciatis quisquam error velit placeat! Id, mollitia. Repellat,
        commodi.
        {{ blog.content }}
      </p>
    </div>
    <div class="center">
      <button>
        <router-link to="/" class="ax">Home Page</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import axios from "axios";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      blog: null,
    };
  },

  mounted() {
    axios
      .get(
        "https://blog-json-server-omega.vercel.app/bolg/" +
          this.$route.params.id
      )
      .then((res) => {
        this.blog = res.data;
      });
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 400px;
}
header {
  padding: 0.1px;
}
.singleBlog h1 {
  color: #fff;
  font-weight: 200;
  font-size: 50px;
}
.blog-container {
  width: 70%;
  margin: auto;
  padding: 30px 0px;
  margin-top: 50px;
}
h2 {
  color: rgb(102, 5, 94);
  padding-left: 15px;
}
.blog-summary {
  color: #a7a5a5;
  padding: 10px;
}
.ax {
  color: white;
  text-decoration: none;
}
.center {
  text-align: center;
  margin-bottom: 40px;
}
</style>
