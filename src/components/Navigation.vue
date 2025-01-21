<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Adaptive Learning</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        v-for="item in navItems"
        :key="item.text"
        :to="item.route"
      >
        {{ item.text }}
      </v-btn>
      <v-btn text color="error" @click="logout">
        Logout
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        navItems: [
          { text: 'Home', route: '/home' },
          { text: 'Quiz', route: '/quiz' },
          { text: 'Dashboard', route: '/dashboard' },
        ],
      };
    },
    methods: {
      logout() {
        // Clear user data from Vuex store
        this.$store.commit('setUser', null);
        this.$store.commit('setDifficulty', null);
        this.$store.commit('setQuizResults', []);
  
        // Redirect to the login page
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .v-btn {
    margin-left: 10px;
  }
  </style>
  