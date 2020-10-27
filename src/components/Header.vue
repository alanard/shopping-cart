<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Shopping cart ard</span>
      <span class="navbar-brand mb-0 h1">Cart ({{totalQty}})</span>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // Fungsi map getters mengambil data / state
    ...mapGetters(['cart']),
    // ? sebenarnya untuk methods bisa khusus membuat methods, tetapi bisa juga ditaruh di computed
    totalQty () {
      // menghitung total atau jumlah quantity, dan se default value nya 0
      return this.cart.reduce((a, b) => a + b.qty, 0)
    }
  }
}
</script>

<style>

</style>
