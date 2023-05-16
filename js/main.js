document.addEventListener("DOMContentLoaded", function () {

    //usuarios
    class Usuarios {
        constructor(nombre, numeroDoc, contrasena) {
            this.nombre = nombre.toUpperCase();
            this.numeroDoc = numeroDoc;
            this.contrasena = contrasena;
        }
    }

    //Usuarios activos
    const usuariosActivos = []
    usuariosActivos.push(new Usuarios("Soledad", 569687425, "4695"))
    usuariosActivos.push(new Usuarios("Juan", 52555687, "1376"))
    usuariosActivos.push(new Usuarios("Silvana", 23547832, "5763"))
    usuariosActivos.push(new Usuarios("Aline", 325796541, "5467"))
    usuariosActivos.push(new Usuarios("Ramón", 12457863, "5763"))
    usuariosActivos.push(new Usuarios("Carolina", 12345678, "1234"))

    //documentos de los usuarios activos
    const docUsuarios = usuariosActivos.map(usuario => usuario.numeroDoc);


    //cartel de alerta, sitio para mayores de 18 con aplicación de Storage & JSON 

    const mensajes = {
        id: 1,
        texto: "Esta página del sitio web es para mayores de edad. Si no cumples con este requisito, por favor no continúes en el mismo."
    }

    primeraEntrada = JSON.parse(sessionStorage.getItem("primeraEntrada"));
    if (!primeraEntrada) {
        mostrarAlerta(mensajes);
        sessionStorage.setItem("primeraEntrada", JSON.stringify(mensajes));
    }

    function mostrarAlerta(mensajes) {
        alert(mensajes.texto);
    }

    //función para calcular el préstamo
    function pagoTotal(monto, cuotas) {
        const tasa = 0.02;
        const intereses = tasa * monto;
        return ((monto + intereses) / cuotas);
    }

    //Eventos de los botones calcular 

    const calcular = document.querySelector("#calcular");

    calcular.addEventListener("click", function (event) {
        event.preventDefault();
        
        //obtener datos de los input
        const prestamo = document.querySelector('input[name="tipoPrestamo"]:checked');
        const monto = document.querySelector("#monto").value;
        const cuotas = document.querySelector("#cuotas").value;
        const texto = document.querySelector("#resultado");
        if (prestamo && prestamo.value === "prestamo1") {


            if (cuotas <= 25 && cuotas > 0) {
                const resultado = pagoTotal(parseInt(monto), parseInt(cuotas));
                texto.innerHTML = "Según los datos proporcionados, usted deberá pagar " + cuotas + " cuotas de " + resultado + " pesos.";
            } else {
                texto.innerHTML = "El número de cuotas seleccionado debe encontrarse entre 1 y 25.";
            }
        } else if (prestamo && prestamo.value === "prestamo2") {
            if (cuotas <= 50 && cuotas > 0) {
                const resultado = pagoTotal(parseInt(monto), parseInt(cuotas));
                texto.innerHTML = "Según los datos proporcionados, usted deberá pagar " + cuotas + " cuotas de " + resultado + " pesos.";
            } else {
                texto.innerHTML = "El número de cuotas seleccionado debe encontrarse entre 1 y 50.";
            }
        } else if (prestamo && prestamo.value === "prestamo3") {
            if (cuotas <= 200 && cuotas > 0) {
                const resultado = pagoTotal(parseInt(monto), parseInt(cuotas));
                texto.innerHTML = "Según los datos proporcionados, usted deberá pagar " + cuotas + " cuotas de " + resultado + " pesos.";
            } else {
                texto.innerHTML = "El número de cuotas seleccionado debe encontrarse entre 1 y 200.";
            }
        } else {
            texto.innerHTML = "Debe seleccionar un tipo de préstamo.";
        }
    });

    //Evento solicitar

    const solicitar = document.querySelector("#solicitar");
    solicitar.addEventListener("click", function (event) {
        event.preventDefault();

        //obtener datos de los input

        const prestamo = document.querySelector('input[name="tipoPrestamo"]:checked');
        console.log("Prestamo seleccionado:", prestamo);
        const texto = document.querySelector("#resultado");
        const registro = document.querySelector("#registro").value;
        if ((docUsuarios.includes(parseInt(registro))) && prestamo) {
            texto.innerHTML = "Gracias por elegirnos, a la brevedad nos comunicaremos con usted para informarle si su prestamo fue autorizado"
        } else {
            texto.innerHTML = "Para acceder a un préstamo usted debe tener un usuario en el sitio web del banco, si lo tiene ingrese su documento de indentidad, en caso de no contar con usurio diríjase a la sucursal más próxima y solicite uno."
        }
    })
})