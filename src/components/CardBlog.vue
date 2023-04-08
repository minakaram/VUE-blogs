<template>
  <div class="card-blog">
    <div class="card-img">
      <img :src=data.iamge alt="" />
    </div>
    <div class="card-content">
      <h2 class="card-title">{{ data.title }}</h2>
      <p class="card-summary">
        {{ data.summary }}
      </p>
      <div class="read-more">
        <h4>
          <router-link :to="`/blog/${data.id}`" class="link-color">
            read more
          </router-link>
        </h4>
      </div>
    </div>
  </div>
</template>

<style>
.card-blog {
  width: 28%;
  margin-bottom: 50px;
  border-radius: 8px;
}
@media (max-width: 900px) {
  .card-blog {
    width: 40%;
  }
}
@media (max-width: 600px) {
  .card-blog {
    width: 90%;
  }
}
.card-title {
  color: rgb(102, 5, 94);
  padding-left: 15px;
}

.card-summary {
  color: #333;
  padding-left: 15px;
}
.read-more {
  text-decoration: none;
  padding-left: 15px;
}
.read-more:hover {
  text-decoration: underline;
}
.card-img h1 {
  color: rgb(0, 0, 0);
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.link-color {
  color: rgb(126, 10, 118);
  text-decoration: none;
}
</style>

<script>
export default {
  props: {
    data: {
      required: true,
    },
  },
};
</script>
