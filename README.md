# 🌱 WhatsApp Chatbot for GetVeggies

Welcome to the **GetVeggies WhatsApp Chatbot** – your smart assistant for receiving supplement orders via WhatsApp! This bot is built using **Node.js**, powered by **Express**, deployed on **Railway**, and integrated with **Twilio's WhatsApp API**.

---

## 🚀 Features

- Instant welcome message & customer onboarding  
- Collects customer name and delivery address  
- Displays live product menu  
- Captures quantity and product selection  
- Sends payment link or QR code  
- Confirms order once paid  

---

## 🛠️ Tech Stack

- **Node.js + Express** – Backend server  
- **Twilio WhatsApp API** – Messaging platform  
- **Railway** – Deployment  
- **MongoDB** *(optional)* – For storing customer info (coming soon!)

---

## 📁 Project Structure

```
📦whatsapp-chatbot
 ┣ 📄 index.js             # Main server file
 ┣ 📄 package.json         # Node.js dependencies and scripts
 ┣ 📄 .env                 # Environment variables (not pushed to GitHub)
 ┣ 📄 .gitignore           # Files/folders to ignore in git
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/YOUR-GITHUB-USERNAME/whatsapp-chatbot.git
 cd whatsapp-chatbot
```

### 2️⃣ Install Dependencies
```bash
 npm install
```

### 3️⃣ Create a `.env` File
Create a `.env` file in the project root and add the following:
```
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=your_twilio_whatsapp_number
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4️⃣ Run the Chatbot Locally
```bash
 node index.js
```
The chatbot will start running on **http://localhost:3000** 🎉

---

## 🌍 Deployment on Railway

### 1️⃣ Push Your Code to GitHub
```bash
 git add .
 git commit -m "Initial Commit"
 git push origin main
```

### 2️⃣ Deploy on Railway
1. Go to [Railway.app](https://railway.app/)  
2. Click **"New Project"** → **"Deploy from GitHub"**  
3. Select your `whatsapp-chatbot` repository  
4. Add environment variables from your `.env` file  
5. Click **Deploy**

🚀 Your chatbot is now live on Railway! 🎉

---

## 🔗 Connect with Twilio

1. Go to [Twilio Console → Messaging → Try it out → Send a WhatsApp message](https://www.twilio.com/console/sms/whatsapp/learn)  
2. Set the webhook to your Railway deployment URL:
```
https://your-railway-app-url.up.railway.app/webhook
```
3. Join the sandbox by sending the join keyword to +1 415 523 8886 via WhatsApp.  
4. Start chatting and follow the chatbot prompts!

---

## 🧠 Chatbot Flow (Current)

1. Customer sends "Hi"  
2. Bot replies with welcome message and sales pitch  
3. Checks if customer already exists (by number)  
   - If new, asks for name and address  
4. Sends product menu  
5. Collects order + quantity  
6. Sends payment link or QR code  
7. Confirms order after payment

---

## 🧱 Coming Soon

- Persistent order history using MongoDB  
- Admin panel to view/manage orders  
- Inventory control integration

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 🧑‍💻 Author

**Imadoddin Quadari**  
👨‍💻 [imad2.odoo.com](https://imad2.odoo.com)  
💼 System Admin at KECC PROJECTS PVT LTD  
📍 Solapur, India

---

## 🧡 Support

If this project helps your hustle, don’t forget to star ⭐ the repo and share with fellow devs & dreamers!

Happy Coding! 🌱🚀

