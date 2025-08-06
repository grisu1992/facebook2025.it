const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 🔁 Redirect da www al dominio principale
app.use((req, res, next) => {
  if (req.headers.host && req.headers.host.startsWith("www.facebook2025.it")) {
    return res.redirect(301, "https://facebook2025.it" + req.url);
  }
  next();
});

// 📦 Serve la cartella 'public' (CSS, immagini, JS, HTML)
app.use(express.static(path.join(__dirname, "public")));

// 🧠 Parsing JSON nel corpo delle richieste
app.use(express.json());

// ✅ Endpoint per ricevere webhook (es. da Brevo)
app.post("/webhook", (req, res) => {
  console.log("📬 Dati ricevuti:", req.body);
  res.status(200).send("Webhook ricevuto correttamente");
});

// 🏠 Serve 'index.html' come homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🚀 Avvio del server
app.listen(PORT, () => {
  console.log(`✅ Server attivo su http://localhost:${PORT}`);
});
