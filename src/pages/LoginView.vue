<template>
    <v-app>
      <v-main>
        <v-container class="d-flex justify-center align-center fill-height">
          <v-card elevation="2" width="400px">
            <v-card-title class="text-center">Welcome Back!</v-card-title>
            <v-card-text>
              <Login />
            </v-card-text>
            <v-card-actions class="justify-center">
              <p>
                Don't have an account?
                <v-btn text color="primary" @click="goToRegister">Register</v-btn>
              </p>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Login from '@/components/Auth/Login.vue';
  
  export default {
    components: {
      Login,
    },
    methods: {
      goToRegister() {
        this.$router.push('/register');
      },
    },
  };
  </script>
  