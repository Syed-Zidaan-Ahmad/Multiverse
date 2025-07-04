# Multiverse  
## A Progressive Web App with cosmic kaleidoscope visuals and interactive responsive animations

**Made by Zidaan**

---

## ✨ Overview

Enter a visual journey through the **Multiverse**, with this futuristic, interactive, and beautifully designed web application.  
It transforms a simple viewing experience into a **dynamic, sci-fi inspired adventure** complete with:

- 🪐 **Kaleidoscope galaxy visuals**  
- 🌌 **Cosmic image transitions**  
- 📱 **Responsive motion controls**  
- ℹ️ **An Info button** explaining how to install and use the app clearly

Perfect for showing off creative coding skills or simply enjoying a mesmerizing multiverse view on your device.

---

# Try this by clicking the link and if you like it, star the repo and spread the cosmic love!  

https://syed-zidaan-ahmad.github.io/Multiverse/

---

## 🚀 Features

✅ **Kaleidoscope Universe**  
→ Full-screen canvas kaleidoscope effect with cosmic images  

✅ **Image Transitions**  
→ Cycles through multiple stunning cosmic photos every 10 seconds  

✅ **Device Controls**  
→ Move, tilt, or rotate your phone to change the patterns  
→ On PC, move the mouse to interact with the effect

✅ **Info Button for Guidance**  
→ A convenient “ℹ️” button in the top corner shows clear instructions on how to install and use the PWA on both **phones and desktops**  
→ Includes scrollable, mobile-friendly instructions so no one is confused

✅ **Privacy-First**  
→ Motion sensors and mouse are used **only** for interaction  
→ No permanent storage, no third-party tracking, no hidden analytics

✅ **Progressive Web App (PWA)**  
→ You can **install** this app on your phone or desktop just like a native app  
→ Works offline (after first load)  
→ Includes icons and splash screen  
→ Powered by a simple `manifest.json` and `service-worker.js`

---

## 💡 Project Idea

The idea is to create an **immersive cosmic kaleidoscope** that feels futuristic and responsive to your gestures,  
using:

- Sci-fi visuals  
- Neon-inspired colors  
- Smooth transitions  
- Device and mouse interactions  

for a **truly multiverse-inspired experience**.

---

## 🛠️ Setup Guide

Follow these steps to make it your own:

---

### 1️⃣ Clone or Download

```bash
git clone https://github.com/Syed-Zidaan-Ahmad/Multiverse.git
```

or download and extract the ZIP.

---

### 2️⃣ Progressive Web App Support

✅ You already have `manifest.json` and `multiverse-service-worker.js` in the root of this project  
✅ In your `index.html`, make sure these lines are added inside the `<head>`:

```html
<link rel="manifest" href="manifest.json">
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('multiverse-service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg))
      .catch(err => console.log('Service Worker registration failed:', err));
  }
</script>
```

✅ Make sure your icons (`Multiverse 192.png` and `Multiverse 512.png`) are present in the root directory and match the names in your manifest  
✅ When you deploy on GitHub Pages, do a hard refresh (Ctrl+F5) to see the install prompt on supported browsers

---

### 3️⃣ Run It Locally

- Open `index.html` in your browser  
- Move your mouse or rotate your phone to interact  
- Test install prompt (Add to Home Screen)

---

## ✍️ Customization Tips

🪐 **Galaxy Images**  
→ Swap or add images in the `images` array of `script.js`

🎨 **Colors / Theme**  
→ Edit the CSS to match any new theme you want

ℹ️ **Info Button Instructions**  
→ The Info button’s text is customizable in the HTML, you can change install steps easily

---

## 🛡️ Privacy & Data Usage

✅ Motion sensors are used **only** for kaleidoscope controls  
✅ No camera, no mic, no personal data  
✅ No third-party tracking  
✅ 100% user-controlled, no hidden surveillance

---

## 🌐 Deployment

You can host this app **for free** on:

- GitHub Pages  
- Netlify  
- Vercel

Simply upload the `index.html`, `manifest.json`, `multiverse-service-worker.js`, and your icons — and it works instantly.

---

## 🏆 Why This Project Stands Out

✅ Fully interactive  
✅ Lightweight and fast (pure JS, no frameworks needed)  
✅ Works on phones and desktops  
✅ Professional, clean futuristic look  
✅ Easy to customize  
✅ **Perfect for cosmic-themed experiences**

---

## 🤝 Contributing

Feel free to fork, tweak, and suggest improvements — PRs are most welcome!  
If you come up with more cosmic images or even more creative kaleidoscope patterns, let’s make it even cooler together.

---

# 🌌 Let’s explore the Multiverse. Enjoy! 🚀

*If you like it, star the repo and share the cosmic vibes! 🌟*

