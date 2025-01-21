<template>
    <v-container class="d-flex justify-center align-center fill-height">
      <v-card elevation="2" width="400px">
        <v-card-title class="text-center">Login</v-card-title>
        <v-card-text>
          <v-form ref="loginForm" v-model="valid">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              required
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <v-btn
              class="mt-4"
              :disabled="!valid"
              block
              color="primary"
              @click="handleLogin"
            >
              Login
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        valid: false,
        rules: {
          required: (v) => !!v || 'This field is required',
          email: (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        },
      };
    },
    methods: {
      handleLogin() {
        // Mock login logic
        const user = { email: this.email };
        this.$store.dispatch('login', user);
        this.$router.push('/home');
      },
    },
  };
  </script>
  