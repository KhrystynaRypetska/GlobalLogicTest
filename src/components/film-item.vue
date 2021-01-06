<template>
<div class="film-item">
  <h2>
    Вибране
  </h2>
  <div v-if="loading" class="loading">
    Loading...
  </div>
  <div v-if="error" class="error">
    {{ error }}
  </div>
  <div v-if="post" class="film-item_wrapper">

    <div class="img">
      <img :src="`https://image.tmdb.org/t/p/w500` + post.poster_path" alt="img">
    </div>
    <div class="text">
      <p class="title"> {{post.title}}</p>
      <p class="view">{{post.overview}}</p>
      <p class="type">Руйтинг: {{post.vote_average}}</p>
      <p class="view">Дата виходу:{{post.release_date}}</p>
    </div>
  </div>

</div>
</template>

<script>
import axios from "axios";

export default {
  name: "film-item",
  data() {
    return {
      post: null,
      loading: false,
      error: null,
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      const fetchId = this.$route.params.id

      axios.get(`https://api.themoviedb.org/3/movie/${fetchId}?api_key=a750b181fad2f633623d9e375f6f9f9e`)
      .then(resp => {
        this.post = resp.data;
        this.loading = false
      })
      .catch(error => this.error = error.toString())
    }
  }
};
</script>

<style lang="scss" scoped>

</style>