<template>
  <v-toolbar color="cyan" dark clipped-left>
    <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
    <v-toolbar-title>Todo List</v-toolbar-title>

    <nuxt-link to="/" exact>
      <v-btn color="success">Home
      </v-btn>
    </nuxt-link>
    <nuxt-link to="/about">
      <v-btn color="success">About
      </v-btn>
    </nuxt-link>

    <v-spacer></v-spacer>
    <v-flex xs12 sm6 md3>
      <v-text-field
          label="Regular"
          :append-icon="setError"
          v-if="showInput"
          v-model="newTask"
          :loading="isLoadingTask"
          @click:append="addTask(newTask)"
          @keyup.enter="addTask(newTask)"
          @keyup.esc="clearInput"
      ></v-text-field>
    </v-flex>
    <v-btn icon v-if="!showInput" @click="() => showInput = !showInput">
      <v-icon>search</v-icon>
    </v-btn>

  </v-toolbar>

</template>

<script>
  // import { routes } from '../router';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: "Toolbar",
    components: {},
    data () {
      return {
        showInput: false,
        newTask: '',
        dirty: false
      }
    },
    methods: {
      ...mapActions( {
        toggleSideNav: 'uiControllModule/toggleSideNav',
        saveTask: 'todos/storeTodo'
      } ),
      addTask: function(task) {
        if ( task ) {
          this.saveTask( {title: task, fn: this.clearInput} );
        } else {
          this.dirty = true
        }

      },
      clearInput () {
        this.newTask = '';
        this.showInput = false;
      },
    },
    computed: {
      ...mapGetters( {isLoadingTask: 'todos/isLoadingTask'} ),
      setError: function() {
        return !this.newTask && this.dirty ? 'error' : 'search'
      },
    }
  }
</script>

<style scoped>

</style>
