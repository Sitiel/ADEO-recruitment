/**
 * @file Contains the logic of the CLI program.
 */

 const {removeNonMatching, isEmpty} = require('./utils');

/**
 * Filter the countries, people, and animals to only include those that match the given letters.
 * 
 * @param searchedStr - The string used to filter.
 * @param [dataService] - Dependency injection of the data.
 * @returns An array of countries with people with animals that match the letters.
 */

 const filter = (searchedStr, dataService=require('./dataservice')) => {
    if(typeof searchedStr !== 'string') {
        throw new Error('Searched string must be a string');
    }
    if(searchedStr.length === 0) {
        throw new Error('Searched string must not be empty');
    }

    const countries = [...dataService.getCountries()];

    const newList = countries.filter(q => {
        let newCountry = q
        newCountry.people = q.people.filter(p => {
            let newPerson = p
            newPerson.animals = removeNonMatching(searchedStr, p)

            // The 'animals' entry will be removed if there is nothing left inside (return true if keep, false if remove)
            return !isEmpty(newPerson.animals)
        })

        // The 'people' entry will be removed if there is nothing left inside (return true if keep, false if remove)
        return !isEmpty(newCountry.people)
    });

    return newList;
}

/**
 * Count the number of countries, people, and animals and append the count to the name of the parent.
 * @param [dataService] - Depency injection of the data.
 * @returns An array of countries with the number of people and animals in each country in the name.
 */
 const count = (dataService=require('./dataservice')) => {
    let countries = [...dataService.getCountries()];
    return countries.map((country) => {
        return {
            name: `${country.name} [${country.people.length}]`,
            people: country.people.map((people) => {
                return {
                    name: `${people.name} [${ people.animals.length}]`,
                    animals: people.animals
                }
            })
        }
    });
}


module.exports = {filter, count};
