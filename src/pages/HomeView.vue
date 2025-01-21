<template>
    <v-app>
      <Navigation />
      <v-main>
        <v-container class="d-flex justify-center align-center fill-height">
          <v-card elevation="2" class="pa-6 text-center" width="400px">
            <v-card-title>Select Difficulty Level</v-card-title>
            <v-card-text>
              <p>Select a difficulty level to begin your quiz:</p>
            </v-card-text>
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
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Navigation from '@/components/Navigation.vue';
  
  export default {
    components: {
      Navigation,
    },
    methods: {
      selectLevel(level) {
        this.$store.dispatch('selectDifficulty', level);
        this.$router.push('/quiz');
      },
    },
  };
  </script>
  
  <style scoped>
  .v-btn {
    margin-top: 20px;
  }
  </style>
  