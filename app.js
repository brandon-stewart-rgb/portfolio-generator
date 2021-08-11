// constant (const) can not be reassigned a value: Once we declare it, we can never reassign it. 
//For strings and numbers, the content cannot be altered, because the reference is to the content. 
//For arrays and objects, however, the content can be altered, because the reference is to the container, not to the content.
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
// Notice the lack of parentheses around the `profileDataArr` parameter? And 'let'
// Using let and const, variables that are created within any block of code {} will not exist outside the block of code. 

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this...
    profileDataArr.forEach((profileItem) =>  console.log(profileItem));
  };