function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

console.log('sleep...');
sleep(2000).then(() => {
  console.log('wake up!');
});
