
# 🎨 YouTube Live Chat Customizer

> **TH | ภาษาไทยด้านล่าง | English below**

---

## 📝 คำอธิบาย (ภาษาไทย)

โปรเจกต์นี้ช่วยให้คุณสามารถ **จำลองการแสดงผลของ YouTube Live Chat** เพื่อใช้ในงานออกแบบ UI, ระบบแสดงข้อความระหว่างสตรีม, หรือการพัฒนา front-end เช่น PWA หรือ overlay บน OBS

### ⚠️ หมายเหตุสำคัญ

❗ **ไม่ใช่ระบบ Live Chat จริงของ YouTube**

- ไม่เชื่อมต่อกับ YouTube API หรือสตรีมจริง
- ไม่สามารถรับ-ส่งข้อความแบบเรียลไทม์จาก YouTube ได้
- เป็นเพียงระบบจำลอง DOM เพื่อออกแบบหน้าตาเท่านั้น
- พยายามทำให้โครงสร้างและรูปแบบใกล้เคียงกับของจริงมากที่สุด

> ใช้เพื่อ **mock UI**, **ออกแบบธีม**, หรือ **ทดสอบ CSS animation** เท่านั้น

---

### 💡 แรงบันดาลใจ

แนวคิดและโครงสร้างหลักของโปรเจกต์นี้ได้รับแรงบันดาลใจมาจาก [Septapus Chat v2](https://chatv2.septapus.com)  
เว็บไซต์ที่จำลองแชทยูทูบแบบภาพนิ่งเพื่อนำไปใช้ในการตัดต่อวิดีโอ และการสตรีม

เราได้นำแนวคิดนั้นมาต่อยอดให้สามารถแสดงผลแบบ **dynamic DOM** สำหรับการทดลอง CSS/JS ได้แบบสด ๆ  
รวมถึงเพิ่มความสามารถในการใส่ข้อความ, Super Chat และ Sponsor ผ่านหน้า UI

---

### ✅ ความสามารถ

- แสดงข้อความแชทปกติ / Super Chat / Legacy Sponsor
- ปรับแต่ง CSS ได้อย่างอิสระ: สี, ฟอนต์, ขอบ, badge
- รองรับประเภทผู้ใช้: `owner`, `moderator`, `member`
- มี scroll เข้าข้อความล่าสุดอัตโนมัติ

---

### 📁 โครงสร้าง

```
📂 your-project/
├── index.html   # ตัวอย่าง mockup UI
├── chat.css     # CSS สำหรับตกแต่ง chat element แก้ไขที่นี้
├── main.css     # CSS หลักของ chat youtube
├── script.js    # JavaScript สำหรับแสดงข้อความ
└── README.md    # คู่มือสองภาษา
```

---

### 🛠️ ฟังก์ชันใน `script.js`

| ฟังก์ชัน | ทำอะไร |
|----------|--------|
| `sendChatMessage()` | ส่งข้อความธรรมดา |
| `sendSuperChat()` | ส่ง Super Chat พร้อมสีตามยอดเงิน |
| `sendLegacySponsor()` | ส่งข้อความแบบ "สมาชิกใหม่" |
| `scrollIntoView()` | Scroll อัตโนมัติไปยังข้อความล่าสุด |

---

## 📝 Description (English)

This project allows you to **mock and style YouTube Live Chat** in your own front-end project — for UI design, livestream overlays, or PWA chat systems.

### ⚠️ Important Notice

❗ **This is NOT a real YouTube chat system.**

- It does **not** connect to YouTube API
- It does **not** receive messages from a real stream
- It only **mimics the DOM structure and style** of YouTube Live Chat
- We've tried to make it as close to the real UI as possible

> For mockups, theming, and front-end styling only.

---

### 💡 Inspiration

This project is inspired by [Septapus Chat v2](https://chatv2.septapus.com) — a web tool designed to generate mock images of YouTube chat for use in video production.

This implementation extends the idea into a **dynamic DOM-based simulator** that lets you interactively preview chat behavior, test animations, and even prototype chat-related interfaces directly in-browser.

---

### ✅ Features

- Simulates: Normal messages / Super Chats / Legacy Sponsors
- Fully customizable via CSS (colors, fonts, badges)
- Supports user types: `owner`, `moderator`, `member`
- Smooth scroll-to-latest-message support

---

### 📁 Folder Structure

```
📂 your-project/
├── index.html              # Demo mockup UI
├── style.css               # Chat styles
├── script.js               # Chat message functions
└── README.md               # This bilingual guide
```

---

### 🛠️ Functions in `script.js`

| Function | Description |
|----------|-------------|
| `sendChatMessage()` | Adds a normal text message |
| `sendSuperChat()` | Adds a Super Chat with amount |
| `sendLegacySponsor()` | Adds a "New Sponsor" message |
| `scrollIntoView()` | Scrolls chat to latest message |

---

## 📃 License

MIT — Free to use, share, and customize.

---

### 👨‍💻 เหมาะสำหรับใคร?

โปรเจกต์นี้เหมาะสำหรับ:
- ผู้ที่มีความรู้พื้นฐานใน **HTML** และ **CSS**
- นักพัฒนา front-end ที่ต้องการ mock UI ของ YouTube Live Chat
- ผู้ออกแบบ overlay หรือธีมสำหรับ livestreaming ที่ต้องการควบคุมรูปลักษณ์ของแชท

> This project is recommended for developers/designers with **basic HTML and CSS knowledge** who want to build or customize YouTube-style live chat components.

---

### 🙌 สนับสนุนโปรเจกต์นี้

หากคุณชอบโปรเจกต์นี้และต้องการสนับสนุนการพัฒนา  
สามารถสนับสนุนได้ที่นี่ 👉 [https://tipme.in.th/windelath](https://tipme.in.th/windelath)

> If you find this project helpful and would like to support further development,  
> feel free to donate via 👉 [https://tipme.in.th/windelath](https://tipme.in.th/windelath)

---

### 📬 ช่องทางติดตาม / ติดต่อ

สามารถติดตามหรือติดต่อผู้พัฒนาเพิ่มเติมได้ที่:  
- X (Twitter): [@Windlth_FIXIXTN](https://x.com/Windlth_FIXIXTN)  
- YouTube: [Windelathch.FIXIXTN](https://www.youtube.com/@Windelathch.FIXIXTN)
