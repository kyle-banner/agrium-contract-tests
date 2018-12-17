import dotenv from 'dotenv';
import { run, doSomething } from './tests/testRunner';

const env = dotenv.config();
let envVars;
if (env.error) {
  throw env.error;
} else {
  envVars = env.parsed;
}
run();
doSomething();
console.log(envVars);
