require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json()); // if you're expecting JSON messages
app.use(express.urlencoded({ extended: true })); // for form-data from Twilio


app.get("/", (req, res) => {
    res.send("WhatsApp Chatbot is Running! 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("WhatsApp Chatbot server running..."); // 🎉 Your log message
});
