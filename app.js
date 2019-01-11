const first =  document.getElementById('addTask');

const strInput = document.getElementById('input1');

first.addEventListener("click", function(e){
  let arr = [];
  let test;
  let newArr = [];
  let con = strInput.value;
  arr.push(con);

  for(let i=0; i<arr.length; i++){
     test =  arr[i].split(" ");

    for(let x=0; x<test.length; x++){
      if (test[x].length >= 3) {
           newArr.push(test[x]);
         }

  }
    console.log(newArr);
  e.preventDefault();

}
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
