<script setup lang="ts">

const currentPage = ref(1)
const emits = defineEmits(['getFilmsHandler'])

function nextPageHandler() {
  currentPage.value += 1
  emits('getFilmsHandler', currentPage.value)
}
function prevPageHandler() {
  currentPage.value -= 1
  emits('getFilmsHandler', currentPage.value)
}

</script>

<template>
<div class="pagination-container">
  <button @click="prevPageHandler" :disabled="currentPage === 1" > < </button>
  <button @click="nextPageHandler"> > </button>
</div>
</template>

<style scoped lang="scss">
.pagination-container {
  display: flex;
  justify-content: space-around;
  margin: 40px auto;
  width: 800px;
}
</style>
