import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

//(a) Home Team name for 2014 world cup final
//(b) Away Team name for 2014 world cup final
//(c) Home Team goals for 2014 world cup final
//(d) Away Team goals for 2014 world cup final
//(e) Winner of 2014 world cup final */
// 

// const HomeTeam2014Final = []

// fifaData.forEach(function(item){
//     if (item.Year === 2014 && item.Stage === "Final")
//     HomeTeam2014Final.push(item["Home Team Name"])
//     return HomeTeam2014Final
// });



let finals2014 = fifaData.filter(item =>
    item.Year === 2014 && item.Stage === 'Final')

console.log('Task a: ->',finals2014[0]['Home Team Name']);
console.log('Task b: ->',finals2014[0]['Away Team Name']);
console.log('Task c: ->',finals2014[0]['Home Team Goals']);
console.log('Task d: ->',finals2014[0]['Away Team Goals']);
console.log('Task d: ->',finals2014[0]['Win conditions']);





/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter ((item) => {
        return (item).Stage === 'Final'
    })

};
console.log('Task 2 ->', getFinals(fifaData));





/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// 

function getYears(callbackGetFinals) {

    const years = callbackGetFinals.map(item => {
        return item.Year;
    })
    return years
};

console.log('number 3 ->', getYears(getFinals(fifaData)));



/* Task 4: 

Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. 

Return the name of all winning countries in an array called `winners` */ 

//-------------------------------------------------------------------------------------------
// function getwinners w parameters (getFinals - or 'cb')
// determine if home or away won for each world cup final
// end up with an array called winners[] that will give me the names of the winners from every world cup final
//-------------------------------------------------------------------------------------------



function getWinners(cb) {

    const winners = cb.map(item => {
        if (item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name']
        }
        else if (item['Home Team Goals'] < item['Away Team Goals']){
            return item['Away Team Name']
        }
        else if(item['Home Team Goals'] === item['Away Team Goals']){
            return item['Win conditions']
        }
    });
    return winners
}

console.log(getWinners(getFinals(fifaData)));


/* Task 5: Implement a higher-order function called `getWinnersByYear`
 
that accepts the following parameters 
 
Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// and returns a set of strings "In {year}, {country} won the world cup!" 






function getWinnersByYear(cb2,cb1,) {
    for (let i = 0; i < cb1.length; i++){
            let year = cb2[i];
            let country = cb1[i];
        console.log(`In ${year}, ${country} won the world cup!`)
    }
           
};

getWinnersByYear(getYears(getFinals(fifaData)), getWinners(getFinals(fifaData)));







/* Task 6: Write a function called `getAverageGoals`
that accepts a parameter `data`
and returns the the average number of home team goals and away team goals scored per match
(Hint: use .reduce and do this in 2 steps) */

//  returns: avg goals per match by home & away team


function getAverageGoals(array){
    let acc = 0;
    
    let reduced = (acc + array["Home Team Goals"]) => acc + array["Home Team Goals"];
    array.reduce(reduced);
     
}

getAverageGoals(fifaData);

//----------------------------------------------------------------------------
// function getAverageGoals(array){
  
//     let acc = 0;
//     for (let i = 0; i < array.length; i++) {
      
//         console.log(acc + array[i]["Home Team Goals"])
//     }
//     for (let i = 0; i < array.length; i++) {
      
//         console.log(acc + array[i]["Away Team Goals"])
//       }
    
// }

// getAverageGoals(fifaData);
//----------------------------------------------------------------------------


// attempt in function getAverageGoals

// function getAverageGoals(data){

// data.reduce(function (acc, item){
//   return acc + item.MatchID
// }, 0)

// }
// getAverageGoals(fifaData);





// attempt in a function

// fifaData.reduce(function (acc, item){
//   return acc + item.MatchID
// }, 0);





// attempt in arrow function

// fifaData.reduce( (acc, item) => {
//   return acc + item.MatchID
// }, 0);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
