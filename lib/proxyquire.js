/**
 * sample code to demonstrate how proxyquire works
 */

const fs = require('fs');

function punchIt() {
  console.log(__dirname);
  const fixture = fs.readFileSync(
    __dirname + '/../test/fixtures/proxyquire.fixture.json', 'utf8');
  const data = JSON.parse(fixture);
  console.log('>>> data >>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log(data);
  console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
  return data;
}

module.exports = {punchIt};
