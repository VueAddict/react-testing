/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import data from '../../data/courses.json';
// eslint-disable-next-line linebreak-style

const numItems = data.length;

// eslint-disable-next-line no-undef
describe('Number test', () => {
  test('The number of items = 12', () => {
    expect(numItems).toBe(12);
  });
  test('The number of items to be grater than or equal 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;
describe('Title test', () => {
  test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });
  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
});

// Arrays
const data2 = ['React Native', 'React'];
describe('Arrays & Objects test', () => {
  test('The list of courses contains React Native and React', () => {
    expect(['Meteor', 'React', 'React Native']).toEqual(
      expect.arrayContaining(data2),
    );
  });

  // objects
  test('The first course to have a property title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course to have a property title and value 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
