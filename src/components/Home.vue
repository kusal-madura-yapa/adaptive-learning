<template>
    <v-container class="d-flex justify-center align-center fill-height">
      <v-card elevation="2" class="pa-6 text-center" width="400px">
        <v-card-title>Select Difficulty Level</v-card-title>
        <v-btn
          class="mt-4"
          block
          color="primary"
          @click="selectLevel('Beginner')"
        >
          Beginner
        </v-btn>
        <v-btn
          class="mt-4"
          block
          color="secondary"
          @click="selectLevel('Intermediate')"
        >
          Intermediate
        </v-btn>
        <v-btn
          class="mt-4"
          block
          color="error"
          @click="selectLevel('Advanced')"
        >
          Advanced
        </v-btn>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    methods: {
      selectLevel(level) {
        this.$store.dispatch('selectDifficulty', level);
        this.$router.push('/quiz');
      },
    },
  };
  </script>
  