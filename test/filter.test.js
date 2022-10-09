
const {filter} = require('../logic');

describe('filter', () => {

    test('ry should return John Dory and Oryx', () => {
        expect(filter('ry')).toMatchObject([
            {
            name: 'Uzuzozne',
            people: [
                {
                name: 'Lillie Abbott',
                animals: [
                    {
                    name: 'John Dory'
                    }
                ]
                }
            ]
            },  
            {
            name: 'Satanwi',
            people: [
                {
                name: 'Anthony Bruno',
                animals: [
                    {
                    name: 'Oryx'
                    }
                ]
                }
            ]
            }
        ]);
    });

    test('should return an empty array if no match found', () => {
        expect(filter('SHOULD NOT MATCH')).toMatchObject([]);
    });

    const dataSet = [
        [],
        {},
        1,
        "",
        null,
        undefined,
        NaN,
        true,
        false,
        () => {},
    ];


    test.each(dataSet)('%p should throw an error', (data) => {
        expect(() => filter(data)).toThrow();
    });
});
