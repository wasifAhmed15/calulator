let displayNum = document.getElementById("displayNum")
function getval(e){
  displayNum.value +=e
   
}
function cal(){
    let ans  = eval(displayNum.value)
    displayNum.value=ans
}

function clearALL(){
    displayNum.value="0"
}
