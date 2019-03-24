<template>
  <listOfProducts :products="getMugs"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },

  computed: {
    ...mapGetters([
      'getMugs',
    ]),
  },
};
</script>

<style>
</style>

