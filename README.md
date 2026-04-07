# TireCheck Pro

Diagnosi pneumatici con intelligenza artificiale.  
Foto → Analisi → Decisione → Report PDF firmabile.

---

## 🚀 Cos’è

TireCheck Pro è una Progressive Web App (PWA) progettata per officine, gommisti e professionisti automotive.

Permette di:
- Analizzare lo stato di usura degli pneumatici tramite immagini
- Estrarre automaticamente misura e DOT dal fianco gomma
- Generare report PDF firmabili
- Documentare lo stato del pneumatico (anche per tutela legale)
- Individuare officine vicine

---

## ⚡ Filosofia

> Scatti una foto.  
> Hai una diagnosi.  
> Hai una prova.  

---

## 🧠 Funzionalità principali

### 📸 Scansione doppia
- Battistrada → analisi usura
- Fianco → lettura misura + DOT (AI)

### 🤖 Analisi AI
- Profondità stimata
- Usura uniforme
- Condizione fianco
- Livello di urgenza
- Commento tecnico automatico

### 📄 Report PDF
- Generazione immediata
- Firma cliente su touchscreen
- Dati officina integrati

### 📍 Officine vicine
- Gommisti
- Autofficine
- Concessionarie

### 📴 Modalità offline (parziale)
- Accesso app
- Storico analisi
- Inserimento dati

---

## ⚠️ Connessione Internet (IMPORTANTE)

TireCheck Pro utilizza AI online.

✔ Funziona senza internet per:
- apertura app
- storico
- inserimento dati

❌ NON funziona senza internet per:
- analisi immagini
- lettura misura e DOT
- invio webhook
- ricerca officine

👉 Senza connessione:
l’app resta operativa ma non analizza.

---

## 💰 Costi API Gemini

L’app utilizza Google Gemini Vision API.

---

### 🟢 Piano gratuito

✔ Nessun costo  
✔ Nessuna carta richiesta  

Limiti:
- ~20 analisi al giorno
- ~10 richieste/minuto

👉 Ideale per test e uso personale

---

### 🔵 Piano a pagamento (consigliato per officina)

✔ Nessun limite reale  
✔ Maggiore velocità e stabilità  

Costo medio:

- ~€0.18 ogni 1000 analisi  
- ~€0.00018 per scansione  

---

### 📊 Esempio reale

| Analisi/giorno | Analisi/mese | Costo |
|----------------|-------------|-------|
| 10             | 300         | ~€0.05 |
| 30             | 900         | ~€0.15 |
| 100            | 3000        | ~€0.50 |

👉 Il costo è praticamente irrilevante rispetto al valore commerciale.

---

### 🧠 Come funziona il consumo

- 1 analisi = 1 richiesta API  
- 2 foto (battistrada + fianco) → 1 elaborazione  

👉 Non paghi l’app  
👉 Paghi solo l’uso dell’AI

---

## ⚙️ Architettura

/project
├── index.html  
├── manifest.json  
├── sw.js  
├── LICENSE.txt  

---

## 🧩 Tecnologie

- HTML5 / CSS3 / Vanilla JS
- Progressive Web App (PWA)
- Service Worker
- Google Gemini Vision API
- jsPDF
- Geolocation API
- LocalStorage

---

## ⚙️ Configurazione

### 1. API Gemini (obbligatoria)

https://aistudio.google.com

- crea API key gratuita
- inseriscila nella sezione Setup

---

### 2. Webhook (opzionale)

- integrazione Make.com
- automazioni
- CRM

---

### 3. Dati officina

- nome
- telefono
- indirizzo
- P.IVA

---

## 📱 Installazione

### iOS
Safari → Condividi → Aggiungi a Home

### Android
Chrome → Installa app

---

## 🔐 Privacy

- API key salvata solo localmente
- immagini inviate direttamente a Google
- nessun server intermedio PezzaliApp

---

## ⚠️ Limiti

- analisi basata su immagini
- non sostituisce controllo fisico
- precisione dipende dalla qualità foto

---

## 📊 Use Case

- preventivo pneumatici
- documentazione usura
- tutela legale officina
- supporto vendita

---

## 🧑‍💻 Autore

Alessandro Pezzali  
pezzaliAPP

---

## 📜 Licenza

Licenza proprietaria.

✔ Uso gratuito consentito  
❌ Copia, modifica o redistribuzione vietata  

Vedi LICENSE.txt per dettagli.

---

## 🚫 Nota

Questo progetto NON è open source.

---

## 🔥 Sintesi

> Senza connessione, raccogli dati.  
> Con connessione, prendi decisioni.  

TireCheck Pro.
