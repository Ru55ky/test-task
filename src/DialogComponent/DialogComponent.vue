<script setup lang="ts">
const props = defineProps(['currentFilm'])
const emit = defineEmits(['closeDialog'])
</script>

<template>
  <div class="dialog-container">
    <button @click="emit('closeDialog')" id='close'>close</button>
    <div class="dialog-image">
      <img v-if="props?.currentFilm?.poster" class="img" :src="props?.currentFilm?.poster?.url"  alt="test"/>
      <img v-if="!props?.currentFilm?.poster" class="img-default" src="../../public/dom.jpg" alt="test"/>
    </div>
    <div class="dialog-description">
      <span>{{props?.currentFilm?.description}}</span>
      <div class="dialog-ratings">
        <span>Кинокритики - {{props?.currentFilm?.rating?.filmCritics}}</span>
        <span>IMDB - {{props?.currentFilm?.rating?.imdb}}</span>
        <span>Оценка пользователей - {{props?.currentFilm?.rating?.await}}</span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.dialog-container {
  display: flex;
  flex-direction: column;
  width: 450px;
  min-height: 550px;
  height: 600px;
  max-height: 760px;
  position: fixed;
  top: 380px;
  left: 40%;
  bottom: 0;
  background: white;
  border-radius: 8px;
}
img {
  width: 450px;
  height: 400px;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}
.dialog-image {
  width: 450px;
  height: 400px;
}
.dialog-description {
  padding: 8px;
  background: white;
  border-radius: 8px;

}
.dialog-description > span {
  font-size: 20px;

}
.dialog-ratings {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  font-size: 18px;
  margin-top: 20px;
}

#close {
  overflow: hidden;
  position: absolute;
  border: none;
  padding: 0;
  width: 2em; height: 2em;
  border-radius: 50%;
  background: transparent;
  color: white;
  font: inherit;
  text-indent: 100%;
  cursor: pointer;
  right: 10px;

  //&:focus {
  //  outline: solid 0 transparent;
  //  box-shadow: 0 0 0 2px #8ed0f9
  //}

  &:hover {
    background: rgba(29, 161, 142, .1)
  }

  &:before, &:after {
    position: absolute;
    top: 15%; left: calc(60% - .0625em);
    width: .125em; height: 70%;
    border-radius: .125em;
    transform: rotate(45deg);
    background: currentcolor;
    content: ''
  }

  &:after { transform: rotate(-45deg); }
}

</style>
