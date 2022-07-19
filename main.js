var n = prompt("Please enter how many random numbers you want:");
var arr = [];
var loop = 0;
for (let i = 0; i < n; i++) {
    var rand = Math.floor(Math.random() * n)+1;
    var flag = 0;
    
    
    for (let j = 0; j <= arr.length; j++) {
        if(arr[j] == rand + "<br>"){
            flag = 1;
        }
    }

    if(flag == 1){
        i--;
    }
    else{
        arr.push(rand + "<br>");
    }

    loop++;
}

for (let i = 0; i < n; i++) {
    document.getElementById("demo").innerHTML += arr[i];
    document.getElementById("loop").innerHTML = "Loop Count: "+loop;
}