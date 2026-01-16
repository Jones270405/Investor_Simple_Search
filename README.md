# Investor Search Application

A simple Investor Search web application that uses a **local LLM (Ollama)** to suggest potential investors based on **sector** and **country** input. This project demonstrates a lightweight frontend, a Node.js backend, and AI integration without relying on paid APIs.

---

## Features

* Search investors by **sector** and **country**
* AI-generated investor suggestions with short reasoning
* Fast local inference using a **low-memory LLM**
* Simple and clean UI
* No external paid API dependency

---

## Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **AI Model:** LLaMA 3.2 (1B) via **Ollama**
* **Runtime:** Local machine (offline capable)

---

## AI / LLM Details

* **AI Platform Used:** Ollama (local LLM runtime)
* **Model Used:** `llama3.2:1b`
* **API Type:** Local REST API exposed by Ollama
* **Why this model?**

  * Works on low-memory systems (~1–1.5 GB RAM)
  * Faster inference compared to larger models
  * No dependency on external paid APIs

---

##  How to Run the Project

### Install Node.js

Ensure Node.js v18 or above is installed:

```bash
node -v
```

### Install Dependencies

Navigate to the project folder and run:

```bash
npm install
```

### Install and Start Ollama

Download Ollama from: [https://ollama.com](https://ollama.com)

Start the Ollama service:

```bash
ollama serve
```

Pull the required lightweight model:

```bash
ollama pull llama3.2:1b
```

### Start the Application Server

```bash
node server.js
```

The application will run at:

```
http://localhost:3000
```

## Example Input
```
Sector: FinTech
Country: USA
```

## Example Output
```
1. Sequoia Capital – Actively invests in early-stage FinTech startups.
2. Accel – Strong focus on scalable financial technology companies.
3. Andreessen Horowitz – Supports innovative fintech platforms globally.
```

---

## API Key Information

- **API Key Required:** No
- This project uses a **local LLM via Ollama**, so **no API key is needed**.
- The backend communicates with Ollama through its local endpoint:
```
[http://localhost:11434/api/generate](http://localhost:11434/api/generate)
```

---

## Notes
- This project uses a **local LLM**, so performance depends on system hardware.
- No API keys or internet connection required after setup.
- Suitable for demos, assignments, and internships.

---

## License
This project is for educational and assignment purposes only.
