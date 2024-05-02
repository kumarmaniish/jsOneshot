const accountId = 144553
let accountEmail = "manish@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // possibilty hai but its a bad practice
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

hamesa let hi use krna hai
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])