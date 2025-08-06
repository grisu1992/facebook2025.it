const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// 🌀 Redirect da www.facebook2025.it al dominio principale
app.use((req, res, next) => {
  if (req.headers.host === "www.facebook2025.it") {
    return res.redirect(301, "https://facebook2025.it" + req.url);
  }
  next();
});

app.use(bodyParser.json());

// ✅ Endpoint per ricevere webhook
app.post("/webhook", (req, res) => {
  console.log("Dati ricevuti dal webhook:", req.body);
  res.status(200).send("Webhook ricevuto correttamente");
});

// ✅ Endpoint di test base
app.get("/", (req, res) => {
  res.send("Il server è attivo 🔥");
});

// 🚀 Avvio del server
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
