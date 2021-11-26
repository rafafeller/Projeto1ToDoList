
var entrada = document.getElementById("text_input");
var ul = document.getElementById("id_ul");
var idKey = window.localStorage.length;

function carregar() {

    var localStorageKeysSemOrder = [];

    for (var i = 0; i < window.localStorage.length; i++) {
        localStorageKeysSemOrder.push(window.localStorage.key(i));
    }

    var localStorageKeysOrdered = localStorageKeysSemOrder.sort();

    for (var i = 0; i < localStorageKeysOrdered.length; i++) {
        var idKeyFromLocalStorage = localStorage.key(i);
        var textoFromLocalStorage = window.localStorage.getItem(localStorageKeysOrdered[i]);

        var textoObj = JSON.parse(textoFromLocalStorage);
        var texto = textoObj.texto;

        criarNovaLinha(`${idKeyFromLocalStorage}`, texto);
    }
}

function criarNovaLinha(idKey, texto) {

    if (texto == "") {
        alert("Type a task!")
    } else {

        var li = document.createElement("li");

        li.setAttribute("id", idKey);

        ul.appendChild(li);

        var btnCheck = document.createElement("input");
        btnCheck.setAttribute("type", "checkbox");
        li.appendChild(btnCheck);

        btnCheck.addEventListener("change", function () {
            if (this.checked) {
                paragrafo.style.textDecorationLine = "line-through"
            } else {
                paragrafo.style.textDecorationLine = "";
            }
        });

        var paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(texto));
        li.appendChild(paragrafo);

        var btnDelete = document.createElement("button");
        btnDelete.appendChild(document.createTextNode("X"));
        li.appendChild(btnDelete);
        btnDelete.addEventListener("click", function () {
            var sure = confirm("Are you sure that you want to delete?");
            if (sure) {
                var idkeyFromLi = li.getAttribute("id");
                excluirFromLocalStorage(idkeyFromLi);
                li.remove();
            }
        })
    }
}

function adicionarNovaTarefa() {

    var texto = entrada.value;

    if (texto == "") {
        alert("Type a task!")
    } else {

    idKey++;
    criarNovaLinha(idKey, texto);

    var tarefaObj = new Object;
    tarefaObj.texto = texto;

    var tarefaString = JSON.stringify(tarefaObj);
    window.localStorage.setItem(idKey, tarefaString);

    entrada.value = "";
    }
}

function excluirFromLocalStorage(idKey) {
    window.localStorage.removeItem(idKey);
}