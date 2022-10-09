const logic = require('./logic')
const {parseArguments} = require('./utils');

'use strict';

if(process.argv.length > 4) {
    console.log('Usage: node app.js --[count|filter=abc]');
    process.exit(1);
}

try{
    const arguments = process.argv.slice(2);

    // Transform the arguments into an object easier to use
    const commands = parseArguments(arguments);

    let output = '';
    if(commands.filter) {
        output = logic.filter(commands.filter);
        if(commands.count) {
            output = logic.count({getCountries: () => {return output;}});
        }
    }
    else if(commands.count) {
        output = logic.count();
    }
    console.log(JSON.stringify(output, null, 2));  
}catch(e){
    console.log(e.message);
    process.exit(1);
}
