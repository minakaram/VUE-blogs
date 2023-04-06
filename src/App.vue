<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;
  box-sizing: border-box;
}
.container {
  width: 85%;
  margin: auto;
  padding: 50px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.btn-class {
  text-align: center;
  margin-bottom: 40px;
}
</style>
