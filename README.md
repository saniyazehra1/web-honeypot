# Synergy AI: Intelligent PLC Honeypot System 🛡️🤖

### Project Overview
**Synergy AI** is a cutting-edge Industrial Control System (ICS) security project developed for **PBL-1 (Course Code: BCAPBL240301)** at **Teerthanker Mahaveer University (TMU)**. 

Our system emulates a **Programmable Logic Controller (PLC)** environment to attract, misdirect, and analyze cyber-attacks in real-time. It uses deception technology to protect critical industrial infrastructure by trapping hackers in a controlled decoy environment.

---

## 🚀 Key Features
- **PLC Emulation:** High-fidelity simulation of Modbus/TCP endpoints with live telemetry (Temperature, Pressure, Motor Status).
- **Deception Mechanism:** Implements a 'Database Timeout' decoy that captures hacker credentials and IP addresses without exposing real assets.
- **Admin Command Center:** A secure, glassmorphism-style dashboard for real-time monitoring of intercepted network traffic.
- **AI-Driven Analytics:** Logs detailed attacker signatures, including User-Agents, Protocols, and Payload data.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, Lucide Icons (Dark Theme/Glassmorphism).
- **Backend:** Python Flask, Flask-CORS.
- **Data Persistence:** JSON-based persistent logging (`hacker_activity.log`).

---

## 👥 The Synergy Team
| Name | Role | Responsibility |
| :--- | :--- | :--- |
| **Saniya Zehra** | Lead Developer | System Architecture, Flask Backend & PLC Logic |
| **Nidhi** | Asst. Developer | Frontend Components & Data Connectivity |
| **Shradha** | Security Tester | Penetration Testing & Honeypot Validation |
| **Pooja** | Quality Analyst | Log Verification & End-to-end Testing |

**Project Guide:** Mr. Aman Deol

---

## ⚙️ Installation & Usage

### 1. Backend Setup
```bash
python3 server.py
