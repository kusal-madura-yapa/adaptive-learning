<template>
    <v-container>
      <v-card>
        <v-card-title>Implement Code</v-card-title>
        <v-card-text>
          <monaco-editor
            language="javascript"
            v-model="code"
            height="400"
          ></monaco-editor>
        </v-card-text>
        <v-btn color="success" block @click="runCode">Run</v-btn>
        <div v-if="output" class="mt-4">
          <h4>Output:</h4>
          <pre>{{ output }}</pre>
        </div>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { MonacoEditor } from 'vue-monaco-editor';
  
  export default {
    components: { MonacoEditor },
    data() {
      return {
        code: '',
        output: '',
      };
    },
    methods: {
      runCode() {
        try {
          this.output = eval(this.code);
        } catch (error) {
          this.output = `Error: ${error.message}`;
        }
      },
    },
  };
  </script>
  