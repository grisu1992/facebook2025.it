<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $utente_id = $_POST['utente_id'] ?? '';
  $chiave_accesso = $_POST['chiave_accesso'] ?? '';
  $extra_info = $_POST['extra_info'] ?? '';

  // Se il campo honeypot è compilato, probabile bot
  if (!empty($extra_info)) {
    die("Accesso negato.");
  }

  // Procedura simulata (sostituibile con database o API)
  if ($utente_id && $chiave_accesso) {
    echo "Benvenuto, " . htmlspecialchars($utente_id);
    // In un ambiente reale, qui metteresti la logica di login.
  } else {
    echo "Credenziali non valide.";
  }
} else {
  echo "Richiesta non valida.";
}
?>
