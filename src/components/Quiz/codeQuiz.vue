<template>
    <v-container>
      <v-card v-for="(question, index) in questions" :key="index" class="mb-4">
        <v-card-title>{{ question.text }}</v-card-title>
        <v-card-text>
          <v-radio-group v-model="answers[index]" :mandatory="false">
            <v-radio
              v-for="(option, i) in question.options"
              :key="i"
              :label="option"
              :value="option"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>
      <v-btn color="primary" block @click="submitAnswers">Submit</v-btn>
    </v-container>
  </template>
  
  <script>
  import { getQuizQuestions, saveResults } from '@/services/userService';
  
  export default {
    data() {
      return {
        questions: [],
        answers: [],
      };
    },
    created() {
      this.loadQuestions();
    },
    methods: {
      async loadQuestions() {
        const level = this.$store.state.difficulty;
        const response = await getQuizQuestions(level);
        this.questions = response.data; // Assume API returns an array of questions
      },
      async submitAnswers() {
        await saveResults(this.answers);
        this.$router.push('/dashboard');
      },
    },
  };
  </script>
  