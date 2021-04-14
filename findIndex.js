
/*

//PRINT THE ARRAY WICH I HAVE


let myArray = [ "hello", "bonjour", "hola", "ciao" ];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);

*/
//////////////////////////////////////////////////

/*  

//////it did not work

let arr = [ "hello", "bonjour", "hola", "ciao" ];
function findIndex(arr, n){
  
    let i;
    let value = arr[i];
    for(i = 0; i < arr.length; i++){
      if(arr[i] == i){
        return i;
      }
  }}
  
console.log(findIndex(arr,"hola"));
*/

//////////////////////////////////////////////////////

/*

//it works fine try it in console please

var myArray  = ['hello','bonjour','hola','ciao','salam','hi'];

function findIndex(myArray ,value){
  for (let i = 0; i < myArray.length; i++) {
    
    var value = myArray[i];
    console.log("At index " + i + ", the value is " + value);
}

}

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

// it works fine 

function check(value,myArray){

  var status = 'false';

  for(var i=0; i<myArray.length; i++){
    var name = myArray[i];
    if(name == value){
      status = 'true';
      break;
    }
  }

  return status;
}

console.log('status : ' + check('hola', myArray ) );
console.log('status : ' + check('servus', myArray ) );*/
///////////////////////////////////////////////////////////////////////////

/*



let  array = [11, 20, 8, 6, 17];
let el = 6; //Element  i m looking for
let flag = 0; // just to refer to my status just like befor 
for (let i = 0; i < array.length; i++) {
  if (el === array[i]) {
    flag = 1;
  }
}
//Check if flag value changed.
if (flag == 1) {
  console.log('yeh gefunden');
} else {
  console.log('leider nicht gefunden');
}

*/

/////////////////////////////////////////////////////////////////


/*let array =[9,1,10,22,45,15]
function isSorted(array) {

  let isSorted = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      isSorted = false;

    }
  }

  return isSorted;
}
console.log('status : ' + isSorted(array ) );*/

////////////////////////////////////////////////////

/*
function sort_arry(){       

_array =[9,1,10,22,45,15]
let i=0,
         a,
         b;
for( i in _array , i<_array.length , i++){

  if (a > b) {
        let tmp = a;
        a = b; 
        b = tmp;
  console.log('my array' + _array)
  
  } 
} 

  }
*/


  /*

  function sortMyarray(a, b) {
    if (a > b) {
      
      return 1; //or a-b to swap it i think it refers that a greater b
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
}
*/
