<?php
include ("base_de_datos.php");

if($conexion){

    /* isset significa que se presiono el btn */
    if(isset($_POST['btn-iniciar'])){

    /* comprobamos que los datos se hayan llenado */
    if(strlen($_POST["nombre"]) >= 1 && 
        strlen($_POST["contraseña"]) >= 1)
        {

            /* trim es para eliminar espacios al inicio y al final */
            $usuario = trim($_POST["nombre"]);
            $contraseña = trim($_POST["contraseña"]);

            $consulta = " SELECT * FROM `datos_usuario` WHERE nombre = '$nombre' AND contraseña = '$contraseña'";
        
            #aqui vamos a realizar la consulta en la base de datos
            $resultado = mysqli_query($conexion, $consulta);

            if($resultado){
                header("Location: index.html");
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