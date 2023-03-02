

const writers = [
  {
    author: "Hovhannes Tumanyan",
    book: "Giqor",
  },
  {
    author: "Hovhannes Shiraz",
    book: "Ani",
  },
  {
    author: "Eghishe Charenc",
    book: "Yerkir Nairi",
  },
  {
    author: "Hovhannes Tumanyan",
    book: "The dog and cat",
  },
  {
    author: "Derenik Demirchyan",
    book: "Vardanank",
  },
  {
    author: "Eghishe Charenc",
    book: "Land of fire",
  },
];

const groupByAuthor = writers.reduce((group, product) => {
  const { author } = product;
  group[author] = group[author] ?? [];
  group[author].push(product);
  return group;
}, {});

console.log(JSON.stringify(groupByAuthor));