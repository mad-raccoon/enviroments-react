const config = {
  APP_ENV: process.env.REACT_APP_ENV || '',
  PUBLIC_URL: process.env.PUBLIC_URL || '',
  TEST_VARIABLE: process.env.REACT_APP_TEST_VARIABLE || '',

  load() {
    // Use this to fetch different variables if needed
    // Eg.
    debugger;
    this.TEST_VARIABLE = this.TEST_VARIABLE + ' was changed !';

    return new Promise((resolve) => resolve(this));
  },
};

export default config;
