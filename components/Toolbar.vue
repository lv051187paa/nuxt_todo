<template>
  <v-toolbar color="cyan" dark clipped-left>
    <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
    <v-toolbar-title>Todo List</v-toolbar-title>

    <!--<router-link v-for="route in routes" :key="route.name" :to="route.path"><v-btn color="success">{{route.name}}</v-btn></router-link>-->

    <v-spacer></v-spacer>
    <v-flex xs12 sm6 md3>
      <v-text-field
          label="Regular"
          append-icon="search"
          v-if="showInput"
          v-model="newTask"
          loading
          @click:append="() => saveTask(newTask)"
      ></v-text-field>
    </v-flex>
    <v-btn icon v-if="!showInput" @click="() => showInput = !showInput">
      <v-icon>search</v-icon>
    </v-btn>

  </v-toolbar>

</template>

<script>
  // import { routes } from '../router';
  import { mapActions } from 'vuex';

  export default {
    name: "Toolbar",
    components: {},
    data () {
      return {
        showInput: false,
        newTask: ''
      }
    },
    methods: {
      ...mapActions( {
        toggleSideNav: 'uiControllModule/toggleSideNav',
        saveTask: 'todos/saveTodo'
      } )
    },
    created () {
      // console.log($nuxt.$routes)
    }
  }
</script>

<style scoped>

</style>
