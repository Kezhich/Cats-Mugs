import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cats: [
      {
        name: 'Pushistiy',
        price: 279,
        image: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?&h=250&w=250',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'Myagkiy',
        price: 337,
        image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?&h=250&w=250',
        stars: 3.4,
        totalReviews: 20,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'Grustniy',
        price: 550,
        image: 'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?&h=250&w=250',
        stars: 1,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'Igriviy',
        price: 776,
        image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?&h=250&w=250',
        stars: 4.4,
        totalReviews: 340,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'Spyashiy',
        price: 251,
        image: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?&h=750&w=250',
        stars: 3,
        totalReviews: 30,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'Oherevshiy',
        price: 429,
        image: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?&h=250&w=250',
        stars: 2,
        totalReviews: 248,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
    ],

    mugs: [
      {
        name: 'Koshachiy',
        price: 23,
        image: 'https://images.pexels.com/photos/955789/pexels-photo-955789.jpeg?&h=250&w=250',
        stars: 0,
        totalReviews: 0,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'S latte',
        price: 55,
        image: 'https://images.pexels.com/photos/904343/pexels-photo-904343.jpeg?&h=250&w=250',
        stars: 1.5,
        totalReviews: 11,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'Serdechniy',
        price: 87,
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?&h=250&w=250',
        stars: 1,
        totalReviews: 2,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'S potnimy noskami',
        price: 74,
        image: 'https://images.pexels.com/photos/236699/pexels-photo-236699.jpeg?&h=250&w=250',
        stars: 5,
        totalReviews: 310,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'Vanilniy',
        price: 14,
        image: 'https://images.pexels.com/photos/1606991/pexels-photo-1606991.jpeg?&h=250&w=250',
        stars: 2.9,
        totalReviews: 42,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
      {
        name: 'S lavandoy',
        price: 54,
        image: 'https://images.pexels.com/photos/377907/pexels-photo-377907.jpeg?&h=250&w=250',
        stars: 0.5,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        amount: 1,
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
    showOrderModal: false,
  },

  getters: {
    getCats: state => state.cats,
    getMugs: state => state.mugs,
    getAllProducts: state => state.cats.concat(state.mugs),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
    getOrderModal: state => state.showOrderModal,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {     
      state.cartProducts.push(product);      
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
    SHOW_ORDER_MODAL: (state) => {
      state.showOrderModal = !state.showOrderModal;
    },
    INCREASE_AMOUNT: (state, index) => {
      state.cartProducts[index].amount++;
    },
    DECREASE_AMOUNT: (state, index) => {
      state.cartProducts[index].amount--;
    },
  },

  actions: {
    addProduct: (context, product) => {
      if(context.state.cartProducts.indexOf(product) != -1){
         context.state.cartProducts[context.state.cartProducts.indexOf(product)].amount++;
      } else {
        context.commit('ADD_PRODUCT', product);
      }
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
    showOrHiddenOrderModal: (context) => {
      context.commit('SHOW_ORDER_MODAL');
    },
    increaseAmount: (context, index) => {
      context.commit('INCREASE_AMOUNT', index);
    },
    decreaseAmount: (context, index) => {
      if(context.state.cartProducts[index].amount == 1) {
        return true;
      }
      context.commit('DECREASE_AMOUNT', index);
    },
  }
});
