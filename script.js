function clearScreen() {
    document.getElementById("display").value = "";
}

function displayVal(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    var p = document.getElementById("display").value;
    var q = eval(p);
    document.getElementById("display").value = q;
}

function del() {
    display.value=display.value.slice(0,-1);
}