# 🎨 AI Clipart Generator

A mobile application built using React Native (Expo) that allows users to upload an image and generate multiple stylized versions such as Cartoon, Anime, Pixel, Sketch, and Flat styles.

---

## 🚀 Features

- 📤 Upload image from device  
- 🎭 Generate multiple styles at once:
  - Cartoon
  - Anime
  - Pixel
  - Sketch
  - Flat
- ⚡ Smooth and responsive UI  
- 🔄 Async processing with loading indicators  
- 📱 Mobile-friendly design using Expo  
- 🧠 Scalable backend architecture  

---

## 🛠️ Tech Stack

### Frontend
- React Native (Expo)  
- TypeScript  
- Axios  

### Backend
- Node.js  
- Express.js  

---

## 📂 Project Structure


AIClipartGenerator/
│
├── mobile/ # React Native app
├── backend/ # Node.js server
├── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Bhukyasandhya/ai-clipart-generator.git
cd ai-clipart-generator
2️⃣ Backend Setup
cd backend
npm install
node server.js
3️⃣ Mobile App Setup
cd mobile
npm install
npx expo start

👉 Scan the QR code using Expo Go app.

🎯 How It Works
User uploads an image
User clicks "Generate All Styles"
App sends request to backend
Backend processes styles
UI displays all generated outputs in a grid
⚠️ Current Implementation

To ensure a smooth and reliable experience, the backend currently uses a simulated AI response system.

This avoids:

API failures
Large payload issues
Network instability

The architecture is designed to easily integrate real AI models like Replicate or Stability AI.

🚀 Future Enhancements
🔥 Real AI integration (Replicate / Stability AI)
🎨 Style transfer based on uploaded image
💾 Download & Share generated images
🧠 Prompt customization
🌐 Cloud deployment
⚡ Image caching & optimization
🔐 Secure API handling
🧠 Learning Outcomes
Built a full-stack mobile application
Implemented async API handling
Designed scalable AI-ready architecture
Handled real-world issues like payload limits
Improved UI/UX with loading states
👨‍💻 Author

Sandhya
B.Tech Electrical Engineering
MNNIT Allahabad

⭐ Conclusion

This project demonstrates a scalable AI-based application with a strong focus on performance, user experience, and extensibility.


---

### ✅ After pasting:
```bash
git add README.md
git commit -m "Final README"
git push
