function calc(opt){
    // alert("calling")
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value
    // alert(opt)
    if(opt=="add"){
        alert(parseInt(a)+parseInt(b))
    }else if(opt== "sub"){
        alert(a-b)
    }else{
        alert("i m not trained")
    }
}