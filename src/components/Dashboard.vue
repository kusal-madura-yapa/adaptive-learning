<template>
    <v-container>
      <v-card class="mb-4">
        <v-card-title>Performance Summary</v-card-title>
        <v-card-text>
          <v-chart :options="chartOptions" />
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>Recommendations</v-card-title>
        <v-card-text>
          <ul>
            <li v-for="(rec, index) in recommendations" :key="index">{{ rec }}</li>
          </ul>
        </v-card-text>
      </v-card>
      <v-btn block color="primary" @click="retry">Retry Quiz</v-btn>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recommendations: [
          'Review basic Python syntax.',
          'Practice problem-solving with loops.',
          'Focus on debugging skills.',
        ],
        chartOptions: {
          series: [80, 20], // Example data
          labels: ['Correct', 'Incorrect'],
        },
      };
    },
    methods: {
      retry() {
        this.$router.push('/home');
      },
    },
  };
  </script>
  