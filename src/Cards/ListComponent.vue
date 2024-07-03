<script setup lang="ts">
import CardComponent from "~/src/Cards/CardComponent.vue";

const props = defineProps(['filmsList', 'openDialog'])
const emit = defineEmits(['openDialogHandler'])

console.log(props.filmsList)
</script>

<template>
  <div v-if="props?.filmsList" class="list">
    <div @click="emit('openDialogHandler', item)" v-for="item in props?.filmsList" >
      <CardComponent :current-film="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flexible () {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px;
}
.list {
  @include flexible;
  width: 1720px;
  background: lightgray;
  border-radius: 8px;
}
</style>
