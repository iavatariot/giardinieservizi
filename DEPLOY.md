# 🚀 GUIDA RAPIDA DEPLOY - Giardini e Servizi

## ⚡ Opzione 1: Deploy Veloce su Vercel (CONSIGLIATA)

### Passo 1: Carica su GitHub
```bash
# Apri il terminale nella cartella del progetto
cd giardinieservizi

# Inizializza git (se non già fatto)
git init

# Aggiungi tutti i file
git add .

# Fai il primo commit
git commit -m "Primo commit - Sito Giardini e Servizi"

# Collega al repository GitHub (già creato su Vercel)
git remote add origin https://github.com/lavatarlot/giardinieservizi.git

# Carica tutto su GitHub
git branch -M main
git push -u origin main
```

### Passo 2: Deploy Automatico
- Vai su https://vercel.com/dashboard
- Il progetto si deploierà AUTOMATICAMENTE (è già collegato)
- Vercel rileva Next.js e fa tutto da solo
- In 2-3 minuti il sito sarà online!

### Passo 3: Collega il Dominio
1. **Su Vercel:**
   - Clicca sul progetto "giardinieservizi"
   - Vai su "Settings" → "Domains"
   - Clicca "Add"
   - Inserisci: `giardinieservizi.it`
   - Vercel ti darà i DNS da configurare

2. **Su Aruba:**
   - Accedi al pannello domini Aruba
   - Seleziona `giardinieservizi.it`
   - Vai in "Gestione DNS"
   - **Aggiungi questi record:**
     ```
     Tipo: A
     Nome: @
     Valore: 76.76.21.21
     TTL: 3600
     
     Tipo: CNAME
     Nome: www
     Valore: cname.vercel-dns.com
     TTL: 3600
     ```
   - Salva tutto
   - Attendi 24-48 ore (solitamente funziona in 1-2 ore)

### Passo 4: Verifica
- Dopo alcune ore, vai su `giardinieservizi.it`
- Il sito sarà online! 🎉

---

## 🔄 Opzione 2: Deploy da Terminale

```bash
# Installa Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 📝 CHECKLIST PRIMA DEL DEPLOY

- [ ] Sostituisci immagini placeholder con foto reali
- [ ] Aggiorna telefono in `Contact.js` e `Footer.js`
- [ ] Aggiorna email in `Contact.js` e `Footer.js`
- [ ] Inserisci P.IVA corretta in `Footer.js`
- [ ] Testa il sito in locale: `npm run dev`
- [ ] Verifica che tutto funzioni su mobile

---

## 🆘 PROBLEMI COMUNI

### "Permission denied" su git push
```bash
# Genera una chiave SSH e aggiungila a GitHub
# Oppure usa HTTPS con username/password
```

### DNS non funzionano dopo 48 ore
- Verifica i record DNS su Aruba
- Usa `nslookup giardinieservizi.it` per controllare
- Contatta supporto Aruba se necessario

### Sito non si aggiorna dopo modifiche
```bash
# Fai push delle modifiche
git add .
git commit -m "Aggiornamento contenuti"
git push

# Vercel fa il deploy automatico in 2-3 minuti
```

---

## 📞 DATI DA AGGIORNARE NEL SITO

**File: `components/Contact.js`** (riga ~60-75)
```javascript
<p className="text-gray-600">+39 XXX XXX XXXX</p>  // ← Inserisci numero reale
<p className="text-gray-600">info@giardinieservizi.it</p>  // ← Già corretto
```

**File: `components/Footer.js`** (riga ~70-85)
```javascript
<span className="text-gray-400">+39 XXX XXX XXXX</span>  // ← Inserisci numero reale
<p className="text-gray-400">P.IVA: XXXXXXXXXXX</p>  // ← Inserisci P.IVA reale
```

---

## 🎯 PROSSIMI PASSI

Dopo il deploy:

1. **Google Search Console**
   - Aggiungi il sito
   - Invia la sitemap
   - Verifica l'indicizzazione

2. **Google Analytics** (opzionale)
   - Crea account
   - Aggiungi tracking code

3. **Email Form**
   - Configura servizio email (Formspree/SendGrid)
   - Sostituisci la simulazione nel form

4. **Certificato SSL**
   - Vercel lo fornisce AUTOMATICAMENTE
   - HTTPS attivo subito

---

## ✅ FATTO!

Il tuo sito è pronto! 🌱

**URL temporaneo Vercel:** https://giardinieservizi.vercel.app
**URL finale:** https://giardinieservizi.it (dopo configurazione DNS)

Ogni volta che fai `git push`, Vercel aggiorna automaticamente il sito in 2-3 minuti!
