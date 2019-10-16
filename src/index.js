
module.exports = function check(str, bracketsConfig) {
  // your solution
  const brackets = [  // array of pairs open-closed brackets
    ['[', ']'],
    ['{', '}'],
    ['(', ')'],
    ['|', '|'],
    ['1', '2'],
    ['3', '4'],
    ['5', '6'],
    ['7', '7'],
    ['8', '8'],  
];  
  
  let bracketsStore = []; // array for brackets that does not have pair yet
  
    for (let i = 0; i < str.length; i ++) {
       
        for (let k = 0; k < 9; k++) {
           
            if ((str[i] === brackets[k][1]) && (str[i] != brackets[k][0]) && (bracketsStore.length === 0))
                return false; // if first element in bracketsStore is closed bracket return false
             
            if (str[i] === brackets[k][0]) {
                if (brackets[k][1] === bracketsStore[bracketsStore.length-1]) // if open and closed brackets are the same
                    bracketsStore.pop(); 
                else
                    bracketsStore.push(str[i]);
            }
            else {
                if ((str[i] === brackets[k][1]) && (bracketsStore[bracketsStore.length-1] === brackets[k][0])) // if element is closed bracket for last open bracket in bracketsStore
                    bracketsStore.pop();
            }   
        }
    }   
    if (bracketsStore.length === 0) return true; // brackets sequence is correct
    else return false; // brackets sequence is not correct
}
