<template>
  <v-container>
    <TodoItem v-for="todo in allTodos"
              :key="todo.id"
              :todo="todo"
    />
  </v-container>
</template>

<script>
  import TodoItem from './TodoItem.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "TodoList",
    components: {
      TodoItem
    },
    data () {
      return {

      }
    },
    methods: {
      ...mapActions( {fetchTodos: 'todos/fetchTodos'} )

    },
    computed: {
      ...mapGetters( {allTodos: 'todos/allTodos'} )
    },
    created () {
      this.fetchTodos();
    },
  }
</script>

<style scoped>

</style>
