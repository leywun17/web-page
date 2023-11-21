<?php
include("base-de-datos.php");


if($conexion){

    /* isset significa que se presiono el btn */
    if(isset($_POST['btn-enviar'])){

    /* comprobamos que los datos se hayan llenado */
    if(strlen($_POST["nombre"]) >= 1 && 
        strlen($_POST["contraseña"]) >= 1 &&
        strlen($_POST["edad"]) >= 1)
        {

            /* trim es para eliminar espacios al inicio y al final */
            $nombre = trim($_POST["nombre"]);
            $edad = trim($_POST["edad"]);
            $contraseña = trim($_POST["contraseña"]);

            $consulta = "INSERT INTO `usuario` (nombre, contraseña, edad) VALUES ('$nombre', '$contraseña', '$edad')";
        
            #aqui vamos a realizar la consulta en la base de datos
            $resultado = mysqli_query($conexion, $consulta);

            if($resultado){
                header("Location: inicio-sesion-celular.php");
                exit(); 
            }else{
                ?>
                <h3> Hubo un error! </h3>
                <?php
            }
        }

        
    }
}

?>