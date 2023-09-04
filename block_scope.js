//No. 1 Block Scope
{
    //var can access in both block as well as global
    var a = 20;
    //Block Scope
    //Note: best to use let and const
    let b = 45;
    const c = 12;
    console.log(a);
    console.log(b);
    console.log(c);
}

//No. 2 Block Scope
let aa = 56; 
{
  let aa = 67;
  const bb = 90;
  console.log("Block Scoped let aa:"+aa);
}
console.log("Global Scoped let aa:"+aa);

//No.3 shadowing

var first = 44;
{
    var first = 78; //overridden on global first
}
console.log(first);

//No.4 In this case var act different if both var are same it will not overridden
var second = 222;
function x(){
    var second = 222;
    console.log("Block"+second);
}
console.log("Gobal"+second);
