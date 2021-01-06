<template>
<div class="selections">
  <h4>
    Вибране
  </h4>
  <SelectionItem
      v-for="(item, index) in select_data"
      :key="item.id"
      :selected_item_data="item"
      @deleteFromSelected="deleteFromSelected(index)"
  />
</div>
</template>

<script>
import SelectionItem from './selection-item'
import {mapActions} from 'vuex'
export default {
  name: "selections",
  components: {SelectionItem},
  props: {
    select_data: {
      type: Array,
      default() {
        return []
      }
    }
  },

  methods: {
    ...mapActions([
        'DELETE_FROM_SELECTED'
    ]),
    deleteFromSelected(index) {
      this.DELETE_FROM_SELECTED(index)
    }
  }
};
</script>

<style lang="scss" scoped>
.selections {
  width: 30%;
}
</style>