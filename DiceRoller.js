/**
 * Takes in a user inputted message split by spaces. Expects the command
 * to be removed from the array. Returns a string indicating the results
 * of the roll. 
 */
exports.rollDie = function(args){
    
    // If there are no arguments or non number arguments
    if(!args || args.length === 0 || isNaN(args[0])){
        return exports.usage();
    }
    
    var x, y, sum, msg, rolls;
    
    x = (args[0] > 1000) ? 1000 : Math.floor(args[0]);
    sum = 0;
    msg = "Your roll";
    
    // If no y parameter specified, default to 1
    if(args.length == 1 || isNaN(args[1])){
        y = 1;
    } else if (y > 20){
        y = 20;
    } else {
        y = Math.floor(args[1]);
    }
    
    msg += (y > 1) ? "s: " : ": ";
    
    rolls = exports.roll(x, y);
    
    // Sum the rolls and build the message
    for(var i=0; i < rolls.length; i++){
        sum += rolls[i];
        msg += rolls[i];
        if(i != (rolls.length-1)){
            msg += ", ";
        }
    }
    
    msg += " [Sum = " + sum + "]";
    
    return msg;
};

/**
 * Rolls an X sided die Y times. Returns the results of the rolls in an array
 */
exports.roll = function(x, y){
    var results = [];
    var count = (y > 20) ? 20 : y;
    var sides = (x > 1000) ? 1000 : x;
    for(var i=0; i < count; i++){
        results[i] = Math.floor(Math.random() * sides) + 1;
    }
        
    return results;
};

/**
 * Returns a usage string for the !roll command
 */
exports.usage = function(){
    return "Usage: '!roll X Y' Roll an X sided die Y times. Y capped at 20, X capped at 1000";
};
