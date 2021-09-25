/* 
function prefill(n, v) {
    if ( isNaN(n) || n < 0 || !Number.isInteger(n)|| typeof n === 'boolean') {
          let typeError = new TypeError();
      
          typeError.name = "TypeError";
          typeError.message =  n + " is invalid";
          throw typeError;  
      } 
   
       else if (v === undefined) {
         let arrayN = Array.from({ length: n }, () => undefined);
        
         return arrayN;
      } else {
         let arrayN = Array.from({ length: n }, () => v);
        
         return arrayN;
      }
 }

 console.log(prefill(1, -3)); */

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
/* 
  function createFunctions(n) {
    let callbacks = [];
  
    for (var i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
  } */

  function createSecretHolder(secret){
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
console.log(obj.getSecret());//2