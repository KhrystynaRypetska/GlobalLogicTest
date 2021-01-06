<template>
  <div class="catalog-item">

      <div class="img">
        <router-link
            :to="{ name: 'film', params: { id: item_data.id }}" >
        <img :src="`https://image.tmdb.org/t/p/w500` + item_data.poster_path" alt="img">
        </router-link>
      </div>
    <div class="text">
      <p class="title">{{item_data.title}}</p>
      <button
          class="button btn"
          @click="addToSelectd"
      >
        <img :src="require('@/assets/img/like.png')" alt="">
      </button>
    </div>
  </div>
</template>
<script>

export default {
  name: "catalog-item",
  props: {
    item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {

  },

  methods:{
    addToSelectd() {
      this.$emit('addToSelectd', this.item_data)
    },
    // addToFilmPage() {
    //   this.$emit('addToFilmPage', this.item_data)
    // },


  },
};
</script>

<style lang="scss" scoped>
.catalog-item {
  flex-basis: 25%;
  align-self: stretch;
  box-shadow: 0 0 8px #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  width: auto;
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .img {
    display: block;
    max-width: 450px;
    max-height: 300px;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

}

</style>