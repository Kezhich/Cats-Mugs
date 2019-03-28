<template>
  <div>
    <transition name="fade">
      <form class="contacts" v-show="showOrderModal">
        <div class="main-contacts">
          <h2 class="heading-secondary">Order Now</h2>
          <div class="main-contacts__group">
            <input
              type="text"
              class="main-contacts__input"
              placeholder="Full Name"
              id="name"
              ref="name"
              required
            >
            <label for="name" class="main-contacts__label">Full name</label>
          </div>

          <div class="main-contacts__group">
            <input
              type="email"
              class="main-contacts__input"
              placeholder="Email adress"
              id="email"
              ref="email"
              required
            >
            <label for="email" class="main-contacts__label">Email adress</label>
          </div>

          <div class="main-contacts__group">
            <input
              type="tel"
              class="main-contacts__input"
              placeholder="Phone number"
              id="phone"
              ref="phone"
              required
            >
            <label for="phone" class="main-contacts__label">Phone number</label>
          </div>
        </div>
                <btn type="submit" btnColor="btn btn-large btn-buy" @click.native="closeModal($event)">
          BUY
        </btn>
      </form>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import btn from "./Btn";
import maskBg from "./Mask";

export default {
  components: {
    btn,
    maskBg
  },
  computed: {
    ...mapGetters({
      showOrderModal: "getOrderModal"
    })
  },
  methods: {
    ...mapActions(["showOrHiddenOrderModal"]),
    ...mapGetters(["getProductsInCart"]),
    closeModal(event) {
      event.preventDefault();
      this.showOrHiddenOrderModal();
      var storage = this.getProductsInCart();
      var form = {
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        phone: this.$refs.phone.value,
        storage: storage
      }
      //тут аякс запрос
      
    }
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  background-image: linear-gradient(to right, #333333, #000000);
  margin: 0 auto;
  width: 500px;
  margin-top: 3rem;
  position: relative;
  border-radius: 1rem;
  box-shadow: 1rem 0rem 3rem rgba(#000, 0.5);
}

.main-contacts {


  &__group {
      display: flex;
      flex-direction: column;
      padding: 1rem 3rem;
  }

  &__input {
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba(#fff, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    display: block;
    transition: all 0.3s;
    box-shadow: 0 -1.5rem 4rem rgba(#000, 0.15);
    border-radius: 6px;
    border: 1px solid rgba(#000, 0.3);
   
  
    &::-webkit-input-placeholder {
      color: #999;
    }

    &:focus:invalid {
      border-bottom: 3px solid #ff7730;
    }

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(#000, 0.1);
      border-bottom: 3px solid #55c57a;
    }
  
  }
  &__label {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }

    &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }


    &::after {
      height: 1rem;
      width: 1rem;
      content: "";
      display: block;
      border-radius: 50%;
      background-color: #55c57a;
      opacity: 0;
      transition: opacity 0.2s;
    }

}

.heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, #fff, #333);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transition: all .2s;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
    transform: translateZ(0);
    margin:  1rem 15%;


    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(0,0,0, .2);

    }
}

.btn-buy {
    transform: translate(-50%, -50%);
    margin: 0 50%;
    transition: all .3s;

    &:hover {
       
    }
}
</style>


