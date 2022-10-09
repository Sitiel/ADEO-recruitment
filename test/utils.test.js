const {parseArguments, removeNonMatching, isEmpty} = require('../utils');

describe('utils', () => {

    test('parseArguments should return an object with the properties of the data passed', () => {
            expect(parseArguments(['--filter=ry', '--count'])).toMatchObject({
                filter: 'ry',
                count: true
            });
        });

    test('parseArguments should return an empty object if no arguments are passed', () => {
        expect(parseArguments([])).toMatchObject({});
    });

    test('removeNonMatching should return an array of animals that match the searched string', () => {
        expect(removeNonMatching('Oryx', {
            name: 'Lillie Abbott',
            animals: [
                {
                    name: 'John Dory'
                },
                {
                    name: 'Oryx'
                }
            ]
        })).toMatchObject([
            {
                name: 'Oryx'
            }
        ]);
    });

    test('removeNonMatching should return an empty array if no match found', () => {
        expect(removeNonMatching('SHOULD NOT MATCH', {
            name: 'Lillie Abbott',
            animals: [
                {
                    name: 'John Dory'
                },
                {
                    name: 'Oryx'
                }
            ]
        })).toMatchObject([]);
    });

    test('isEmpty should return false if the argument is an array and has at least one element', () => {
        expect(isEmpty([1])).toBe(false);
    });

    test('isEmpty should return true if the argument is an array and has no elements', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('isEmpty should return false if the argument is not an array', () => {
        expect(isEmpty(1)).toBe(false);
    });
});