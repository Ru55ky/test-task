<script setup lang="ts">
const props = defineProps(['currentFilm'])
// console.log(props.currentFilm)
</script>

<template>
  <div class="card">
    <div class="img-background">
      <img v-if="props?.currentFilm?.poster" class="img" :src="props?.currentFilm?.poster?.url"  alt="test"/>
      <img v-if="props?.currentFilm?.poster && !props?.currentFilm?.poster?.url" class="img" :src="props?.currentFilm?.poster?.previewUrl" alt="test"/>
      <img v-if="!props?.currentFilm?.poster" class="img-default" src="../../public/test.jpg" alt="test"/>
      <div class="title-container">
        <span class="film-title">{{props?.currentFilm?.name}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flexible () {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@mixin title() {
  font-size: 18px;
}
.card {
  @include flexible;
  width: 400px;
  padding: 5px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 40px;
  background: white;
  border-radius: 8px;
  height: 570px;
  &hover {
    color: pink;
  }
}
.card-title {
  //position: absolute;
  z-index: 1;
  font-size: 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
  text-align: center;
  color: white;
}
.card-description {
  position: absolute;
  z-index: 1;
  font-size: 16px;
  color: white;
}
.card-background {
  position: relative;
  border-radius: 8px;
  width: 400px;
  height: 600px;
}
.img {
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  border-radius: 8px;
  width: 400px;
  height: 500px;

}
.img-default {
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  border-radius: 8px;
  width: 400px;
  height: 500px;
}
.img-background {
  //position: absolute;
  height: 520px;
}
.title-container {
  display: flex;
  justify-content: center;
  margin-top: 15px
}
.film-title {
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
  text-align: center;
}
</style>
