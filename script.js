function display(num){
    result.value+=num
}

function cleardisplay(){
    result.value=''
}

function evaluatenum(){
    // exp=result.value
    // output=eval(exp)
    // result.value=output


    result.value=eval(result.value)
}
function remove(){
    result.value=result.value.slice(0,-1)
}



