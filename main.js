
/*  
 function rentalCarCost(d) {
  if (d >= 7) {
    return (d * 40) - 50;
  } else if ( d >= 3 && d < 7) {
    return (d * 40) - 20;
  } else return d * 40;
} */



/*  function sequence(n, pattern) {
   let arr = new Array();
   if (pattern === []) {
      return new Array(n).fill([]);
   } else if ( typeof(pattern) === 'function'){
      return new Array(n).fill(n).map(pattern);
   } else {
    return new Array(n).fill(pattern);
   }
 }

  //console.log(sequence(5, []));
  console.log(sequence(5, (x, idx) => idx%2)); */

/*   function basicOp(operation, value1, value2)
  {
    if (operation === '+') {
      return value1 + value2;
    } else if (operation === '-') {
      return value1 - value2;
    }
     else if (operation === '*') {
      return value1 * value2;
    }
     else if (operation === '/') {
      return value1 / value2;
    } else {
        console.log('Enter correct operation');
    }
  } */


/* 
  function array(arr){
    let arrSplit = arr.split(',');
   if (arrSplit.length < 3) {
     return null;
   } else {
     return arrSplit.slice( 1, arrSplit.length - 1 ).join(' ');
   }
} */


/* function getMiddle(s)
{
  if (s.length % 2 == 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.floor(s.length / 2)] ;
  }
} */


/*   function createSecretHolder(secret){
    return { 
      secret: secret,
      setSecret: function(secret){
        this.secret = secret; 
      },
      getSecret:function(){
        return this.secret;
      },
    }        
}

obj = createSecretHolder(5);

console.log(obj);
console.log(obj.getSecret()) ;//5
obj.setSecret(2);
console.log(obj.getSecret());//2 */


/* 
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.
You have to validate input:
v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function. */

function prefill(n, v) {
    console.log(!Number.isInteger(n));

  if ( isNaN(n)|| typeof n === 'boolean' || !isFinite(n) || !Number.isInteger(n) ) {
        throw new TypeError(`${n} is invalid`);  
    } else if (n == 0) {
      return [ ];
     } else if ( n < 0 ) {
         throw new RangeError(`${n} is invalid`);
     } else {
       return new Array(n).fill(v);
    }
}

console.log(prefill(1.2 , 1));