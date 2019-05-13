<template>
  <v-container>
    <TodoItem v-for="todo in todos"
              :key="todo.id"
              :todo="todo"
    />
    <Pagination v-if="allTodos.length" />
  </v-container>
</template>

<script>
  import TodoItem from './TodoItem.vue';
  import Pagination from './Pagination.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "TodoList",
    components: {
      TodoItem,
      Pagination
    },
    data () {
      return {

      }
    },
    methods: {
      ...mapActions( {fetchTodos: 'todos/fetchTodos'} )

    },
    computed: {
      ...mapGetters( {allTodos: 'todos/allTodos',  todos: 'todos/todos'} )
    },
    created () {
      this.fetchTodos();
    },
  }
</script>

<style scoped>

</style>
