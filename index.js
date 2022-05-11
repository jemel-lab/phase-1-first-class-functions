function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  function liftWeights() {
    console.log("Pump iron");
  }
  function Monday() {
    receivesAFunction(liftWeights);
  }
  function returnsANamedFunction (){
      return runFiveMiles;
  }
  function receivesAFunction(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  function returnsAnAnonymousFunction (){
      return function () {
        return "string"
    }
  }

 
 
 
  //returnsAnAnonymousFunction (() => console.log("before all"));
 //receivesAnAnonymousFunction();