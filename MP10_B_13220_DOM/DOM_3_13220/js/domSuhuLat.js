var spanSuhu;
var pStatus;

function init() {
    spanSuhu = document.getElementById("outputSuhu");
    pStatus = document.getElementById("statusCuaca");
    konversiSuhu("celcius");
}

function konversiSuhu(id) {
    var c = parseFloat(document.getElementById(id).value);

    // Input kosong / bukan angka
    if (isNaN(c)) {
        resetHasil();
        return;
    }

    var f = (c * 9 / 5) + 32;
    spanSuhu.firstChild.data = f;

    if (f >= 86) {
        spanSuhu.style.color = "red";
        spanSuhu.style.fontWeight = "bold";
        pStatus.firstChild.data = "Status: Panas";
    } else {
        spanSuhu.style.color = "blue";
        spanSuhu.style.fontWeight = "normal";
        pStatus.firstChild.data = "Status: Sejuk";
    }
}

function resetHasil() {
    spanSuhu.firstChild.data = 0;
    spanSuhu.style.color = "";
    spanSuhu.style.fontWeight = "normal";
    pStatus.firstChild.data = "Status: -";
}

function resetForm() {
    document.getElementById("celcius").value = "";
    resetHasil();
}