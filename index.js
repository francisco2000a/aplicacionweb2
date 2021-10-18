

document.getElementById('registro').addEventListener('click', (e) => {

    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;
    var contraseña2 = document.getElementById('contraseña2').value;


    let bases_de_datos = [nombre, apellido, email, contraseña, contraseña2];

    document.getElementById('mensaje').innerHTML = "Listo, " + bases_de_datos[0] +" "+ bases_de_datos[1] +" ya te encuentras registrado.";

    for(var i =0; i<bases_de_datos.length; i++){

        console.log(bases_de_datos[i]);

    }

    
})




