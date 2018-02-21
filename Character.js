const fs = require("fs");

/**
 * Return the string version of a character JSON
 */
exports.printCharacter = function(args, id){
    var character;
    
    // Try to find the json file with a name matching the id of the user who requested it
    try{
        character = JSON.parse(fs.readFileSync("./characters/" + id + ".json", "utf8"));
    }
    catch(err){
        return "No character data found for id: " + id;
    }
    
    // If any arguments provided, fitler for those properties
    if(!args || args.length === 0){
        return '```' + JSON.stringify(character, undefined, '\t') + '```';
    } else {
        return '```' + JSON.stringify(character, args, '\t') + '```';
    }
    
    
};

/**
 * Get the value for a specific property from a JSON blob
 */
exports.getProperty = function(property, id){
    var character;
        // Try to find the json file with a name matching the user who requested it
    try{
        character = JSON.parse(fs.readFileSync("./characters/" + id + ".json", "utf8"));
        
        if(character.hasOwnProperty(property)){
            return character[property];
        }
    }
    catch(err){
        return null;
    }
};


/**
 *
 */
exports.addEntry(property, 
