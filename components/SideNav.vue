<template>
  <v-navigation-drawer
      fixed
      temporary
      stateless
      :value="isSideNavVisible"
  >
    <v-list dense>
      <v-list-tile avatar tag="div">
        <v-list-tile-avatar>

        </v-list-tile-avatar>

        <v-list-tile-content>

        </v-list-tile-content>

        <v-list-tile-action @click="toggleSideNav">
          <v-btn icon>
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile
          v-for="item in items"
          :key="item.title"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "SideNav",
    data () {
      return {
        items: [
          {title: 'Home', icon: 'dashboard'},
          {title: 'About', icon: 'question_answer'}
        ],
      }
    },
    methods: {
      ...mapActions({toggleSideNav: 'uiControllModule/toggleSideNav'})
    },
    computed: {
      ...mapGetters( {isSideNavVisible: 'uiControllModule/isSideNavVisible'} )
    },
    created () {

    }

  }
</script>

<style scoped lang="scss">

</style>
