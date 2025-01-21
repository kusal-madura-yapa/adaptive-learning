<template>
    <v-app>
      <Navigation />
      <v-main>
        <v-container>
          <v-tabs v-model="activeTab">
            <v-tab>Code Quiz</v-tab>
            <v-tab>Implement Code</v-tab>
          </v-tabs>
  
          <v-tabs-items v-model="activeTab">
            <v-tab-item>
              <CodeQuiz />
            </v-tab-item>
            <v-tab-item>
              <ImplementCode />
            </v-tab-item>
          </v-tabs-items>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Navigation from '@/components/Navigation.vue';
  import CodeQuiz from '@/components/Quiz/CodeQuiz.vue';
  import ImplementCode from '@/components/Quiz/ImplementCode.vue';
  
  export default {
    components: {
      Navigation,
      CodeQuiz,
      ImplementCode,
    },
    data() {
      return {
        activeTab: 0, // Default to the first tab (Code Quiz)
      };
    },
  };
  </script>
  
  <style scoped>
  .v-tabs {
    margin-bottom: 20px;
  }
  </style>
  