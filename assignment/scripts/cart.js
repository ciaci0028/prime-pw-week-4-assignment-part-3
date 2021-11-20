console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// - Create a global variable named `basket` and set it to an empty array.
let basket = [];

console.log (`Empty basket:`, basket) ;

// - Create a function called `addItem`. It should:
 //  - take an input parameter for a string `item`
 //  - add the new item to the global array `basket`. 
 //  - return `true` indicating the item was added
 function addItem( item ){
    basket.push( item );
    return true;
 }

 // Testing function by adding 'Socks' to the basket
 console.log( `Adding socks to basket, expect true:`, addItem( 'Socks' ) );
 console.log( `Expect basket to contain Socks:`, basket );

 // Testing function by adding 'Pants' and 'Shirt' to the basket
 addItem( 'Pants' );
 addItem( 'Shirt' );
 console.log ( `Expect basket to contain Socks, Pants, Shirt:`, basket );

// - Create a function called `listItems`. It should:
 //  - loop over the items in the `basket` array
 //  - console.log each individual item on a new line
 function listItems( array ){
     for ( item of array ){
         console.log ( item );
     }
 }

 // Testing listItems function on basket array
console.log (`Expect an individual list of items below:`) 
listItems( basket );

// - Create a function called `empty`. It should:
  // - reset the `basket` to an empty array
  function empty( array ) {
      while ( array.length > 0 ){
          array.pop () ;
      }
  }

  // Testing empty function
  empty( basket );
  console.log ( `Expect an empty basket: ${basket}`);

// ### Stretch Goals 
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

// __Using functions in other functions!__

// 1. Add a global `const` named `maxItems` and set it to 5.

// 2. Create a function called isFull(). It should:
  // - return `false` if the basket contains *less* than max number of items
  // - return `true` otherwise (equal or more than maxItems)

// 3. Update the required `addItem` function to:
  // - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
  // - If an item was added to the array, return `true`
  // - If there was no room and the item could not be added return `false`

// __Using Array built-in functions!__

// 4. Create a function called `removeItem`. It should:
  // - Take an input parameter for a string `item`
  // - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
  // - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
  // - Return the item removed or `null` if the item was not found
