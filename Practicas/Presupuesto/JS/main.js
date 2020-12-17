var presupuesto = 15000;
var cantidad = 15000;

agregarValores();

function agregarValores() {
    document.getElementById("PresupuestoLabel").innerHTML += presupuesto;
    document.getElementById("DisponibleLabel").innerHTML += presupuesto;
    console.log("hola");
}


function agregarGasto(Gasto) {
    var a = document.getElementById("gasto").value;
    var b = document.getElementById("cantidad").value;

    document.getElementById("gasto").value = "";
    document.getElementById("cantidad").value = "";

    document.getElementById("tableBody").innerHTML += "<tr><td>" + a + "</td><td>" + b + "$</td></tr>";
    document.getElementById("PresupuestoLabel").innerHTML = "  " + presupuesto;
    cantidad = cantidad - b;
    document.getElementById("DisponibleLabel").innerHTML = " " + cantidad;
    console.log(cantidad);
}

agregarValores();