<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
        <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
          <img :src="product.image" alt class="product-image">
          <h3 class="product-name">{{ product.name }}</h3>
          <span class="product-price">R$ {{ product.price*product.amount }},00</span>
                  <div class="amount">
          <a @click="decreaseCurrentAmount(index)" >-</a>
          {{product.amount}}
          <a @click="increaseCurrentAmount(index)">+</a>
        </div>
          <button class="product-remove" @click="remove(index)">X</button>
        </li>
      </transition-group>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./">Back to list of products</router-link>
    </div>
    <div class="checkout-container">
      <button @click="openOrderModal()" class="btn"> <router-link to="/buy">Checkout</router-link></button>
      <h3 class="total" v-if="hasProduct()">Total: $ {{ totalPrice() }}, 00</h3>
    </div>
    <orderForm></orderForm>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import orderForm from "./OrderForm";

export default {
  components: {
    orderForm
  },
  computed: {
    ...mapGetters(["getProductsInCart"])
  },

  methods: {
    ...mapActions(["removeProduct", "showOrHiddenOrderModal",'increaseAmount',
      'decreaseAmount']),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce(
        (current, next) => current + (next.price)*next.amount,
        0
      );
    },
    remove(index) {
      this.removeProduct(index);
    },
    openOrderModal() {
      this.showOrHiddenOrderModal();
    },
       increaseCurrentAmount(index) {
      this.increaseAmount(index);
    },
    decreaseCurrentAmount(index) {
      this.decreaseAmount(index);
    }
  }
};
</script>

<style scoped>
.checkout-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.btn {
  font-weight: bold;
  background-color: green;
  width: 10rem;
  height: 2rem;
  border: 0;
  cursor: pointer;
  border-radius: 3px;
  color: #fff;
  margin: 2rem 0;
  text-transform: uppercase;
  border-radius: 1rem;
}

.checkout-box {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 1em;
  position: relative;
}

.checkout-list {
  padding: 0;
}

.checkout-product {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 0.5fr 0.5fr;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  padding: 0.8em;
  margin: 1em 0;
}

.checkout-product * {
  place-self: center;
}
.product-image {
  grid-column: 1/2;
  width: 50%;
}

.product-name {
  box-sizing: border-box;
}

.product-price {
  font-size: 1.2em;
  font-weight: bold;
}

.product-remove {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 0;
  background-color: #e0e0e0;
  color: #fff;
  cursor: pointer;
}

.total {
  font-size: 2em;
  font-weight: bold;
  align-self: flex-end;
}

.checkout-message {
  font-size: 1.5em;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
