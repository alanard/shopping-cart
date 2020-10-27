<template>
    <div>
      <Header/>
      <div class="container">
        <div class="row mt-5">
          <div class="col-8">
            <ProductList/>
          </div>
          <div class="col-4">
            <Cart/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    Header,
    ProductList,
    Cart
  }
}
</script>

<style scoped>

</style>
