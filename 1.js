setTimeout(function(){
  console.log("timer");
},5000);

function x(y){
  console.log("x");
  y();
}
x(function y(){
  console.log("y");
});




// var name = "Meghana";
//  name = "Megh";
//  console.log(name);

//  let nam = "Meghana";
//  {
//   let nam = "Megh";
//   console.log(nam);
//  }
//  console.log(nam);

//  const name1 = "Meghanaaa";
//  console.log(name1);

//  alert('Hello world');