import Jasmine from 'jasmine';
const jasmine = new Jasmine();

function run() {
  jasmine.loadConfigFile('jasmine.json');
  jasmine.execute();
}

function doSomething() {
  console.log('doing something');
}

module.exports = {
  run,
  doSomething
};
