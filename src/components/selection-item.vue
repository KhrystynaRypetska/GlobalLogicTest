<template>
  <div class="selection-item">
    <div class="img">
      <img
          style="selection-item_img"
          :src="`https://image.tmdb.org/t/p/w500` + selected_item_data.poster_path"
          alt="img">
    </div>
    <div class="text">
      <div class="info">
        <p class="title">
          {{selected_item_data.title}}
        </p>
        <p>{{selected_item_data.media_type}}</p>
      </div>
      <button
          @click="deleteFromSelected"
      >
        <img :src="require('@/assets/img/like.png')" alt="">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "selection-item.vue",
  props: {
    selected_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromSelected() {
      this.$emit("deleteFromSelected")
    }
  },
};
</script>

<style lang="scss" scoped>
.selection-item {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  box-shadow: 0 0 8px #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  width: 50%;
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .img {
    display: flex;
    max-width: 350px;
    max-height: 350px;
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  button {
    display: block;
    max-width: 50px;
    max-height: 50px;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>