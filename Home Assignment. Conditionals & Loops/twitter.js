
// var tweet = "the food in the mall is really bad! I hate eating it again. lol";

// if(tweet.length <= 180){
//     console.log("You tweeted: " + tweet);
// }
// else{
//     console.log("You tweeted: " + tweet.slice(0,181));
// }

function checkTweet(tweet, limit = 180, ending = "..."){
    if(tweet.length > limit){
        return tweet.substring(0, limit - ending.length) + ending;
    }
    else{
        return tweet;
    }
}

var tweet = checkTweet("the food in the mall is really bad! I hate eating it again. lol.");

console.log(tweet);
