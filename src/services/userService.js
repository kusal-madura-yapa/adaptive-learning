// User Login
export const loginUser = async (credentials) => {
    try {
      console.log('Login Request:', credentials);
      // Simulating API response
      const mockResponse = { userId: 1, token: 'mock-jwt-token', message: 'Login successful' };
      console.log('Login Response:', mockResponse);
      return mockResponse;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };
  
  // User Registration
  export const registerUser = async (userData) => {
    try {
      console.log('Registration Request:', userData);
      // Simulating API response
      const mockResponse = { userId: 1, message: 'Registration successful' };
      console.log('Registration Response:', mockResponse);
      return mockResponse;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };
  
  // Fetch Quiz Questions
  export const getQuizQuestions = async (level) => {
    try {
      console.log('Fetch Quiz Questions for Level:', level);
      // Simulating API response
      const mockResponse = [
        { id: 1, question: 'What is Python?', options: ['Programming Language', 'Snake'], correct: 0 },
        { id: 2, question: 'What is a loop?', options: ['Iteration', 'Condition'], correct: 0 },
      ];
      console.log('Quiz Questions Response:', mockResponse);
      return mockResponse;
    } catch (error) {
      console.error('Error fetching quiz questions:', error);
      throw error;
    }
  };
  
  // Save Quiz Results
  export const saveQuizResults = async (results) => {
    try {
      console.log('Save Quiz Results:', results);
      // Simulating API response
      const mockResponse = { status: 'success', message: 'Results saved successfully' };
      console.log('Save Quiz Results Response:', mockResponse);
      return mockResponse;
    } catch (error) {
      console.error('Error saving quiz results:', error);
      throw error;
    }
  };
  
  // Save Results (General)
  export const saveResults = async (results) => {
    try {
      console.log('Save Results:', results);
      // Simulating API response
      const mockResponse = { status: 'success', message: 'Results saved successfully' };
      console.log('Save Results Response:', mockResponse);
      return mockResponse;
    } catch (error) {
      console.error('Error saving results:', error);
      throw error;
    }
  };
  