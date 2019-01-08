
const first =  document.getElementById('addTask');

const strInput = document.getElementById('input1');

first.addEventListener("click", function(e){
  let arr = [];
  let newArr = [];
  let con = strInput.value;
  arr.push(con);

  console.log(typeof con);
  console.log( con);
  console.log( arr);

  for(i=0; i<arr.length; i++){
    let newStr = arr[i].split(" ");
    console.log(arr[i]);
    console.log(newStr);
    console.log(newStr.length);

  }




  e.preventDefault();

});


// let ar = ["lets", "practice", "working", "with", "algorithms"];

// function returnStr(arr, num) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= num) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// document.getElementById("first-function").innerHTML = returnStr(ar, 5);
