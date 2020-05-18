const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

test("comparing objects", () => {
  expect(obj1).not.toBe(obj2);
  expect(obj2).not.toBe(obj3);
  expect(obj1).not.toBe(obj3);
});
