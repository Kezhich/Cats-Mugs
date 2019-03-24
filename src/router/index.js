import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '../components/AllProducts';
import AllMugs from '../components/AllMugs';
import AllCats from '../components/AllCats';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/mugs',
      name: 'Mugs',
      component: AllMugs,
    },
    {
      path: '/cats',
      name: 'Cats',
      component: AllCats,
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },
  ],
});
