
var input = document.getElementById("task");
var ul = document.getElementById("ul");
var item = document.getElementById("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {

    var li = document.createElement("li");

    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    li.appendChild(check);
    var line
    check.addEventListener("click", function (checkItem) {
        if (!line){
        const liPai = checkItem.srcElement.parentNode;
        liPai.style.textDecorationLine = "line-through";
        line = true;
        } else {
        const liPai = checkItem.srcElement.parentNode;
        liPai.style.textDecorationLine = "";
        line = false;
        }
    })
    
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(input.value));
    li.appendChild(p);
    ul.appendChild(li);
    input.value = ""

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", function (deleteListItem) {
        var sure = confirm("Are you sure that you want to delete?");
        if(sure){
            li.remove();
        }
        
        
    });
}

function adicionar() {
    if (inputLength() > 0) {
        createListElement();
    }
}