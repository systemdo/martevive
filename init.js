var readline = require('readline');
var Exchange =  require('./Exchange');


var exchange = new Exchange();


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question(">>Tip the galaxy number: ", galaxyNumber => {
  rl.prompt();
  rl.setPrompt("->->Marte Vive Î:");
  console.log(">>Result: "+ exchange.exchange(galaxyNumber));
  rl.on('line', (galaxyNumber)=>{
    rl.prompt();
    rl.setPrompt("->->Marte Vive Î:");
    console.log(">>Result: "+exchange.exchange(galaxyNumber));

   });
});

rl.on('close', function() {
  console.log('goodbye!');
  process.exit(0);
});
