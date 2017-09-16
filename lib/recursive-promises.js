/**
 * recursive promises
 */

const tree = {
  data: 1,
  children: [
    {
      data: 2,
      children: [
        {
          data: 3,
          children: [],
        },
        {
          data: 3,
          children: [],
        },
        {
          data: 3,
          children: [],
        },
      ],
    },
    {
      data: 2,
      children: [
        {
          data: 3,
          children: [],
        },
        {
          data: 3,
          children: [],
        },
        {
          data: 3,
          children: [],
        },
      ],
    },
    {
      data: 2,
      children: [
        {
          data: 3,
          children: [],
        },
        {
          data: 3,
          children: [],
        },
        {
          data: 3,
          children: [],
        },
      ],
    },
  ],
};

function recurse(node) {
  if (node.children && node.children.length > 0) {
    const promises = node.children.map(n => {
      return Promise.resolve()
      .then(() => {
        return recurse(n);
      });
    });
    return Promise.all(promises)
    .then(values => {
      return values.reduce((acc, value) => {
        acc += value;
        return acc;
      }, node.data);
    });
  }
  return Promise.resolve().then(() => node.data);
}

function punchIt() {
  recurse(tree)
  .then(value => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(value);
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
  });
}

punchIt();
