let list = document.getElementById("json");
let output=''

fetch("user.json").then(function respone(respone){
return respone.json();
}
)
.then(function (accept){
    accept.forEach(element => {
    output+="<h1>"+element.name+element.id+"</h1>"
    });
    list.innerHTML=output;
})