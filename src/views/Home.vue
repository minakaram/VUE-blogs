<template>
  <div>
    <AppHeader>
      <h1>blog</h1>
    </AppHeader>
    <div class="container" v-if="blogs">
      <CardBlog v-for="blog in blogs" :key="blog.id" :data="blog" />

    </div>
    <div class="btn-class">
      <button
        type="button"
        onclick="loadMore">
        Load more
      </button>
      <button
        type="button"
        onclick="loadMore"
        v-if="blogs && totalCount && blogs.length < totalCount"
      >
        Load more
      </button>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import CardBlog from "../components/CardBlog.vue";
import axios from "axios";
export default {
  components: {
    AppHeader,
    CardBlog,
  },
  data() {
    return {
      blogs: null,
      page: 1,
      totalCount: null,
    };
  },
  mounted() {
    this.addBlog(this.page);
  },
  methods: {
    addBlog(page) {
      axios
        .get(
          `https://blog-json-server-omega.vercel.app/bolg?_page=${page}&_limit=6`
        )
        .then((res) => {
          let allData = this.blogs ? this.blogs.concat(res.data) : res.data;
          this.blogs = this.page === 1 ? res.data : allData;
          this.totalCount = res.headers["x-total-count"];
        });
    },
    loadMore() {
      this.page++;
      this.addBlog(this.page);
      console.log(this.totalCount);
    },
  },
};
</script>

<style>
button {
  color: white;
  background-color: rgb(102, 5, 94);
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  text-align: center;
}

button:hover {
  background-color: rgb(141, 7, 130);
}
</style>
