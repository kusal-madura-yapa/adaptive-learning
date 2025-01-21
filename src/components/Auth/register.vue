<template>
    <v-container class="d-flex justify-center align-center fill-height">
      <v-card elevation="2" width="400px">
        <v-card-title class="text-center">Register</v-card-title>
        <v-card-text>
          <v-form ref="registerForm" v-model="valid">
            <v-text-field
              v-model="name"
              label="Name"
              required
              :rules="[rules.required]"
            ></v-text-field>
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
              :rules="[rules.required, rules.min]"
            ></v-text-field>
            <v-text-field
              v-model="confirmPassword"
              label="Confirm Password"
              type="password"
              required
              :rules="[rules.required, matchPassword]"
            ></v-text-field>
            <v-btn
              class="mt-4"
              :disabled="!valid"
              block
              color="primary"
              @click="handleRegister"
            >
              Register
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { registerUser } from '@/services/userService';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        rules: {
          required: (v) => !!v || 'This field is required',
          email: (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          min: (v) => (v && v.length >= 6) || 'Password must be at least 6 characters',
          matchPassword: (v) => v === this.password || 'Passwords must match',
        },
      };
    },
    methods: {
      async handleRegister() {
        try {
          const user = {
            name: this.name,
            email: this.email,
            password: this.password,
          };
          await registerUser(user); // API call to register user
          this.$router.push('/'); // Redirect to login page
        } catch (error) {
          alert('Registration failed. Please try again.'); // Simple error handling
        }
      },
    },
  };
  </script>
  