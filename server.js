const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// ✅ Endpoint per ricevere webhook
app.post("/webhook", (req, res) => {
  console.log("Dati ricevuti dal webhook:", req.body);

  // Qui puoi inviare email, salvare su database, ecc.
  res.status(200).send("Webhook ricevuto correttamente");
});

// ✅ Endpoint di test base
app.get("/", (req, res) => {
  res.send("Il server è attivo 🔥");
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
