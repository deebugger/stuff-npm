/**
 * a reverse promise waterfall - when you need only one to succeed
 * based on Remy Sharp's promise waterfall pattern
 * https://remysharp.com/2015/12/18/promise-waterfall
 */

function run(value) {
  return new Promise((resolve) => {
    // wait for 200ms before resolving this promise
    setTimeout(resolve, 200);
  })
  .then(() => {
    console.log('>> value: ' + value);
  });
}

const source = [0,1,2,3,4,5,6,7,8,9];

function parallel() {
  console.log('>> parallel - start');
  const promises = source.map(value => {
    return run(value);
  });
  // all promises run in parallel
  return Promise.all(promises);
}

function waterfall() {
  console.log('>> waterfall - start');
  const promise = source.reduce((acc, value) => {
    // starting from Promise.resolve,
    // each promise is chained to the previous one
    return acc.then(() => run(value));
  }, Promise.resolve([]));
  return promise;
}

function punchIt() {
  Promise.resolve()
  .then(parallel)
  .then(waterfall);
}

module.exports = {punchIt};
