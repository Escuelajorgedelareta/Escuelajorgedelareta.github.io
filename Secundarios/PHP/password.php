<?php
// Definir la contraseña correcta
$contraseña_correcta = "losprimeros";

// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener la contraseña ingresada por el usuario
    $contraseña_ingresada = $_POST["password"];

    // Verificar si la contraseña es correcta
    if ($contraseña_ingresada === $contraseña_correcta) {
        // La contraseña es correcta, redireccionar a la página protegida
        header("Location: pagina_protegida.php");
        exit();
    } else {
        // La contraseña es incorrecta, mostrar un mensaje de error
        $mensaje_error = "La contraseña es incorrecta. Por favor, inténtalo de nuevo.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Contraseña</title>
</head>
<body>
    <h2>Verificación de Contraseña</h2>
    <?php if (isset($mensaje_error)): ?>
        <p><?php echo $mensaje_error; ?></p>
    <?php endif; ?>
    <form  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?> "method="post">
        <label for="password">Contraseña:</label>
        <input type="password" name="password" id="password" required>
        <button type="submit">Entrar</button>
    </form>
</body>
</html>
