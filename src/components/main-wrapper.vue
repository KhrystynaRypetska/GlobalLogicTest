<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Selections
        v-if="SELECTEDS.length"
        :select_data="SELECTEDS"
    />
  </div>
</template>

<script>
import Selections from "./selections";
import  {mapGetters} from 'vuex';
export default {
  name: 'main-wrapper',
  components: {
    Selections,
  },
  props: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
        'SELECTEDS',
    ])
  },
  methods: {},
  watch: {},


}
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin: 0 auto;
}

</style>