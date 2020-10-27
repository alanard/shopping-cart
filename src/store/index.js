import Vue from 'vue'
import Vuex from 'vuex'
import products from '../mock/products.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  // Tempat untuk merubah state (kita bisa melakukan mutasi)
  mutations: {
    getProductData (state) {
      state.products = products
    },
    addItemToCart (state, item) {
      // menggunakan method find untuk mencari, jika product.id yang kita pilih sama dengan item.id
      // Maka yang bertambah hanya jumlah quantity saja
      const addedItem = state.cart.find((product) => product.id === item.id)
      console.log(addedItem)
      if (addedItem) {
        addedItem.qty++
      } else {
        // Item tersebut kita spread agar bisa di tambahkan qty, default dari qty merupakan 1
        state.cart.push({ ...item, qty: 1 })
      }
    },
    // Untuk menambah item quantity jika button add di click
    addQty (state, id) {
      const currentItem = state.cart.find((product) => product.id === id)
      currentItem.qty++
    },
    // Untuk mengurangi item quantity jika button add di click
    reduceQty (state, id) {
      const currentItem = state.cart.find((product) => product.id === id)
      if (currentItem.qty <= 1) {
        // Jika item dalam cart kurang dari satu, maka item tersebut akan terhapus
        state.cart = state.cart.filter((product) => product.id !== id)
      } else {
        // Tapi jika item masih lebih besar dari 1, maka akan berkurang
        currentItem.qty--
      }
    },
    // Untuk menghapus item jika button X di click
    removeItem (state, id) {
      // Jadi untuk menyeleksi, jika yang id yang di klik tidak sama dengan product.id, maka tidak akan dihapus
      // Tapi jika sama, maka akan dihapus
      state.cart = state.cart.filter((product) => product.id !== id)
    },
    emptyCart (state) {
      state.cart = []
    }
  },
  // Action untuk melakukan commit terhadap muttations
  actions: {
    getProducts ({ commit }) {
      commit('getProductData')
    },
    addToCart ({ commit }, item) {
      commit('addItemToCart', item)
    },
    addQty ({ commit }, id) {
      commit('addQty', id)
    },
    reduceQty ({ commit }, id) {
      commit('reduceQty', id)
    },
    removeItem ({ commit }, id) {
      commit('removeItem', id)
    }
  },
  // Fungsi dari getter meng get data dari state tapi biasanya datanya itu sudah tidak asli karena sudah dilakukan penjumahlahan dll
  getters: {
    products (state) {
      return state.products
    },
    cart (state) {
      return state.cart
    }
  },
  modules: {
  }
})
