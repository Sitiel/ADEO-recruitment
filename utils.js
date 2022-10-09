/**
 * @file Contains the utility functions.
 */


/**
 * Given an array of command line arguments, return an object with the following properties: filter and count if present in the arguments.
 * @param argv - The argument vector. This is an array of the arguments passed to the program.
 */
 const parseArguments = (argv) => {
    return argv.reduce((acc, arg) => {
        if(arg.startsWith('--filter')) {
            acc.filter = arg.split('=')[1];
        }
        else if(arg.startsWith('--count')) {
            acc.count = true;
        }
        return acc;
    }, {});
}


/**
 * It returns false if the argument is an array and has at least one element
 * @param arr - The array to check.
 * @returns a boolean
 */
 const isEmpty = (arr) => {
    return (Array.isArray(arr) && !arr.length)
}

/**
 * It takes a string and a person object, and returns an array of animals that match the string
 * @param searchedStr - the string that we're searching for
 * @param person - the person object
 * @returns An array of animals that match the searched string.
 */
const removeNonMatching = (searchedStr, person) => {
    return person.animals.map((animal) => {
        if (animal.name.includes(searchedStr)) {
            return animal;
        }
    }).filter(e => e)
}



module.exports = {parseArguments, isEmpty, removeNonMatching};
