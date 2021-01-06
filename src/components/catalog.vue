<template>
  <div class="catalog">
    <h4>{{ title }}</h4>
    <div class="search">
      <input
          type="text"
          v-model="shearchValue"
      >
      <button @click="search(shearchValue)">Знайти</button>
      <button @click="clear">Очистити</button>
    </div>
    <div class="catalog_wrapper">
      <div v-if="!items.length">Нічого не знайдено</div>
      <CatalogItem
          v-for="item in items"
          :key="item.id"
          :item_data="item"
          @addToSelectd="addToSelected"
      />
    </div>
    <button v-if="!lastPage" @click="nextPage">Наступна сторінка</button>
  </div>
</template>

<script>
import CatalogItem from "./catalog-item"
import  {mapActions} from 'vuex'
import {mapGetters} from 'vuex'


export default {
  name: "catalog",
  components: {
    CatalogItem
  },

  data () {
    return {
      title: 'Популярні фільми',
      lastPage: false,
      shearchValue: '',

    }
  },
  computed: {
    ...mapGetters({
      items: "ITEMS",
      data: "DATA",
      value: 'SEARCH_VALUE'
    })
  },
  methods: {
    ...mapActions([
        'GET_DATA_FROM_API',
        'ADD_TO_SELECTED',
        'GET_NEXT_PAGE',
        'GET_SEARCH_ITEM'
    ]),
    addToSelected(data) {
      this.ADD_TO_SELECTED(data)
    },

    nextPage() {
      if((this.data.page + 1 ) >= this.data.total_pages) {
        this.lastPage = true
        return
      }
      this.GET_NEXT_PAGE(this.data.page + 1)
    },
    search(value){
      if(!value) return
      this.GET_SEARCH_ITEM(value)
    },
    clear() {
      this.GET_DATA_FROM_API()
    }
  },

  mounted() {
    this.GET_DATA_FROM_API()
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  &_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>