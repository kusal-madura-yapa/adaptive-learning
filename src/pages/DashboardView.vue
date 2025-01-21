<template>
    <v-app>
      <Navigation />
      <v-main>
        <v-container>
          <v-card class="mb-6">
            <v-card-title>Performance Summary</v-card-title>
            <v-card-text>
              <v-chart :options="chartOptions" />
            </v-card-text>
          </v-card>
  
          <v-card class="mb-6">
            <v-card-title>Recommendations</v-card-title>
            <v-card-text>
              <ul>
                <li v-for="(rec, index) in recommendations" :key="index">
                  {{ rec }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
  
          <v-row justify="center" class="mt-4">
            <v-btn color="primary" @click="restartQuiz">
              Restart (Fresh Start)
            </v-btn>
            <v-btn color="success" class="ml-4" @click="reattemptQuiz">
              Reattempt Based on Previous Progress
            </v-btn>
          </v-row>
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
    data() {
      return {
        chartOptions: {
          series: [
            { name: 'Correct', data: [80] },
            { name: 'Incorrect', data: [20] },
          ],
          chart: {
            type: 'donut',
          },
          labels: ['Correct', 'Incorrect'],
        },
        recommendations: [
          'Review Python syntax and basic concepts.',
          'Practice working with functions and loops.',
          'Enhance problem-solving skills through coding challenges.',
        ],
      };
    },
    methods: {
      restartQuiz() {
        // Clear user progress and redirect to HomeView
        this.$store.commit('setQuizResults', []);
        this.$store.commit('setDifficulty', null);
        this.$router.push('/home');
      },
      reattemptQuiz() {
        // Redirect to HomeView for reattempt while retaining previous progress
        this.$router.push('/home');
      },
    },
  };
  </script>
  
  <style scoped>
  .v-btn {
    min-width: 200px;
  }
  </style>
  