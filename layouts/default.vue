<template>
  <v-app>
    <Toolbar/>
    <v-container fluid>
      <v-layout align-center justify-center row fill-height>
        <v-content>
        <nuxt />
          <SideNav />
        </v-content>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
  import Toolbar from '../components/Toolbar.vue';
  import SideNav from '../components/SideNav.vue';

export default {
  components:{
    Toolbar,
    SideNav
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
