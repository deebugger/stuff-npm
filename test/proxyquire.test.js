import test from 'ava';
import proxyquire from 'proxyquire';

const pqCode = proxyquire('../lib/proxyquire', {
  fs: {
    readFileSync: () => {
      return JSON.stringify({
        name: 'proxied',
        description: 'This is a proxy!',
      });
    }
  }
});

test('get proxied data', t => {
  const data = pqCode.punchIt();
  t.is(data.name, 'proxied', 'data is being proxied');
});
