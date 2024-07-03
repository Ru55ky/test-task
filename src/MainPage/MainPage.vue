<script setup lang="ts">
import ListComponent from "~/src/Cards/ListComponent.vue";
import {getFilms, searchFilmByName} from "~/src/api/utils";
import PaginationComponent from "~/src/pagination/PaginationComponent.vue";
import { watch} from "vue";
import DialogComponent from "~/src/DialogComponent/DialogComponent.vue";
import {useDebouncedRef} from "~/src/hooks/useDebounce";
import type {FilmsType} from "~/src/types/types";

const search = useDebouncedRef('')
const openDialog = ref<boolean>(false)
const filmsList = ref<FilmsType[]>([])
const allFilms = ref<FilmsType[]>([])
const currentFilm = ref<FilmsType>()

function openDialogHandler(current: FilmsType) {
  openDialog.value = true
  currentFilm.value = current
  console.log('getFilmsHandler1', current, openDialog.value)
}

function closeDialog() {
  openDialog.value = false
  console.log('getFilmsHandler1', openDialog.value)
}

watch(search, () => {

  filmsList.value = allFilms.value.filter((searchElement: any) => {
    for(let key in searchElement) {

      if(typeof searchElement[key] === 'string') {

        if(searchElement[key].toLowerCase().includes(search?.value?.toLowerCase())) {
          return searchElement
        }
      }

    }
  })

  if(filmsList.value.length === 0) {
    searchRequestHandler(search?.value)
  }

})

async function searchRequestHandler(value:string) {
  try {
    const response = await searchFilmByName(value)
    filmsList.value = response?.docs
    allFilms.value = response?.docs
  } catch (err) {
    console.log('при поиске фильма произошла ошибка')
  }
}

async function getFilmsHandler(id = 1) {
  try {
    const response = await getFilms(id)

    if(response) {
      filmsList.value = response?.docs
      allFilms.value = response?.docs
    }

    console.log('getFilmsHandler2', response, filmsList.value)
  } catch (err) {
    console.log('при получении списка произошла ошибка')
  }
}

onMounted(async () => {
  await getFilmsHandler()
})

</script>

<template>
  <div class="container">
    <div class="searchContainer">
      <input class="search" placeholder="Поиск" v-model="search" type="text" />
    </div>
    <ListComponent :filmsList="filmsList" :openDialog="openDialog" @openDialogHandler="openDialogHandler"/>
    <PaginationComponent @getFilmsHandler="getFilmsHandler" />
    <DialogComponent v-if="openDialog" :current-film="currentFilm" @closeDialog="closeDialog"/>
  </div>
</template>

<style scoped>
.container {
  margin: 5% auto;
  background: white;
}
.searchContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
}
.search {
  height: 30px;
  width: 550px
}
</style>
