<template>
  <div class="text-xs-center">
    <v-pagination
        :length="pagination.total"
        circle
        :value="pagination.active"
        @input="(e) => changePage(e)"
    ></v-pagination>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "Pagination",
    data () {
      return {

      }
    },
    methods: {
      ...mapActions({changePage: 'todos/changePage'})
    },
    computed: {
      ...mapGetters({pagination: 'todos/getPagination'})
    }
  }
</script>

<style scoped>

</style>
