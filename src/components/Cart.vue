<template>
  <div>
    <div v-if="!cart.length" class="alert alert-secondary" role="alert">
      No Product in cart!
    </div>
    <div v-if="orderPlaced" class="alert alert-success" role="alert">
      order successfully placed!
      <button
          @click="() => orderPlaced = false"
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <ul class="cart list-group" v-for="item in cart" :key="item.id">
      <li class="list-group-item">
        <button
          @click="removeItem(item.id)"
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="media">
          <img
          width="80px"
          :src="item.imgUrl"
          class="mr-3" :alt="item.title">
          <div class="media-body">
            <p class="mt-0">{{ item.title }}</p>
            <button @click="reduceQty(item.id)" class="btn-qty btn btn-sm btn-secondary">-</button>
            x {{ item.qty }}
            <button @click="addQty(item.id)" class="btn-qty btn btn-sm btn-secondary">+</button>
          </div>
        </div>
      </li>
    </ul>
    <!-- Menggunakan class bootstrap untuk membuat button -->
    <button @click="placeOrder" :disabled="isLoading" class="btn-checkout btn btn-lg btn-block btn-success" v-if="cart.length">
      <div v-if="isLoading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <span v-else>$ {{ totalPrice }}</span>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      isLoading: false,
      orderPlaced: false
    }
  },
  computed: {
    ...mapGetters(['cart']),
    // untuk menghitung total price
    totalPrice () {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0)
    }
  },
  methods: {
    ...mapActions(['addQty', 'reduceQty', 'removeItem']),
    ...mapMutations(['emptyCart']),
    placeOrder () {
      this.isLoading = true
      setTimeout(() => {
        this.orderPlaced = true
        this.isLoading = false
        this.emptyCart()
      }, 1000)
    }
  }
}
</script>

<style scoped>
.cart {
  margin-top: 20px;
}
.btn-qty {
  border-radius: 50%;
  width: 30px;
}
.media {
  width: 90%;
}
.media-body {
  text-align: left;
}

.btn-checkout {
  margin-top: 20px;
}
</style>
