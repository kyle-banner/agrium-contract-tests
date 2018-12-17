import dotenv from 'dotenv';
import Jasmine from 'jasmine';

const jasmine = new Jasmine();
const env = dotenv.config();
let envVars;
if (env.error) {
  throw env.error;
} else {
  envVars = env.parsed;
}

// runTests();
jasmine.execute();
console.log(envVars);
