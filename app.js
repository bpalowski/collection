
const first =  document.getElementById('addTask');

const strInput = document.getElementById('input1');

first.addEventListener("click", function(e){
  let arr = [];
  let con = strInput.value;
  arr.push(con);

  for(let i=0; i<arr.length; i++){
  let newArr = arr[i].split(" ");
    console.log(newArr);

    for(let x=0; x<newArr.length; x++){
      if(newArr[x].length >= 3){
        console.log(newArr[x]);
      }
    }

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
