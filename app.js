const first =  document.getElementById('addTask');

const strInput = document.getElementById('input1');

const message = document.getElementById('message');

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
e.preventDefault();

}
  return  message.innerHTML= newArr;
});
