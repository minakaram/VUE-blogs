<template>
  <header>
    <slot></slot>
  </header>
</template>

<style>
header {
  height: 280px;
  padding: 0.1px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url(../assets/1.jpg); */
  background-size: cover;

  background: linear-gradient(
      to right,
      rgba(51, 7, 58, 0.9),
      rgba(51, 47, 98, 0.8)
    ),
    url(../assets/1.jpg);
  background-position: center;
}
header h1 {
  color: #fff;
  font-weight: 200;
  font-size: 50px;
}
</style>
<script>
export default {};
</script>
