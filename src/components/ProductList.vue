<template>
  <div class="row">
    <div class="card" style="width: 13rem;" v-for="item in products" :key="item.id">
      <img :src="item.imgUrl" class="img card-img-top" :alt="item.title">
      <div class="card-body">
        <h5 class="card-title" style="font-size: 1rem;">{{item.title}}</h5>
        <p class="card-text">${{item.price}}</p>
        <!-- Mempasing parameter item kedalam add to cart di actions -->
        <a href="#" @click="addToCart(item)" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductList',
  methods: {
    ...mapActions(['getProducts', 'addToCart'])
  },
  computed: {
    ...mapGetters(['products'])
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.card {
  margin: 10px;
  padding: 10px;
  box-shadow: 5px 10px 5px #888888;
}
.card-body {
  margin-top: 20px;
}
</style>
