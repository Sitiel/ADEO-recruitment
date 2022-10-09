
const {filter, count} = require('../logic');
const dataService = require('../dataservice');

describe('count', () => {

    const testData = [{
        name: 'Country 1',
        people: [ 
            { 
                name: 'People 1',
                animals: [ 
                    { name: 'Animal 1' },
                ] 
            },
            { 
                name: 'People 2',
                animals:
                    [
                        { name: 'Animal 2' },
                        { name: 'Animal 3' },
                    ] 
            }
        ]
    }]
    
    

    it('should return an object with amount of childs in names of parent categories using test data', () => {
    expect(count({getCountries: () => {
        return testData;
    }})).toMatchObject([
        { 
            name: 'Country 1 [2]',
            people: [ 
                { 
                    name: 'People 1 [1]',
                    animals: [ 
                        { name: 'Animal 1' },
                    ] 
                },
                { 
                    name: 'People 2 [2]',
                    animals:
                        [
                            { name: 'Animal 2' },
                            { name: 'Animal 3' },
                        ] 
                }
            ]
        }]);
    });

    it('should return an object with amount of childs in names of parent categories using real data', () => {
        const countedData = count(dataService);
        expect(countedData[0].name).toMatch('Dillauti [5]');
        expect(countedData[0].people[0].name).toMatch('Winifred Graham [6]');
        expect(countedData[0].people[0].animals[0].name).toMatch('Anoa');
        expect(countedData[0].people[1].name).toMatch('Blanche Viciani [8]');
    });

    it('should be possible to use count after filter', () => {
        const filteredData = filter('ry');
        const countedData = count({getCountries: () => {return filteredData}});

        expect(countedData).toMatchObject([
            {
              "name": "Uzuzozne [1]",
              "people": [
                {
                  "name": "Lillie Abbott [1]",
                  "animals": [
                    {
                      "name": "John Dory"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Satanwi [1]",
              "people": [
                {
                  "name": "Anthony Bruno [1]",
                  "animals": [
                    {
                      "name": "Oryx"
                    }
                  ]
                }
              ]
            }
          ]);
        });
});

