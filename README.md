# 🌱 Giardini e Servizi - Sito Web

Sito web moderno e responsive per servizi di giardinaggio professionale.

## 🚀 Tecnologie Utilizzate

- **Next.js 15** - Framework React moderno
- **Tailwind CSS** - Styling responsive e utility-first
- **Lucide React** - Icone moderne
- **React** - Libreria UI

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:
- Node.js (versione 18 o superiore)
- npm o yarn
- Git

## 🛠️ Installazione Locale

1. **Clona o scarica il repository**
   ```bash
   git clone [URL_REPOSITORY]
   cd giardinieservizi
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   Vai su [http://localhost:3000](http://localhost:3000)

## 📦 Build per Produzione

Per creare una build ottimizzata:

```bash
npm run build
```

Questo genererà i file statici nella cartella `/out`

## 🌐 Deploy su Vercel (RACCOMANDATO)

### Metodo 1: Collegamento GitHub (Automatico)

1. **Carica il progetto su GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/lavatarlot/giardinieservizi.git
   git branch -M main
   git push -u origin main
   ```

2. **Su Vercel:**
   - Vai su https://vercel.com
   - Clicca "New Project"
   - Importa il repository GitHub
   - Vercel rileva automaticamente Next.js
   - Clicca "Deploy"

3. **Dominio Personalizzato:**
   - Su Vercel: Settings → Domains
   - Aggiungi `giardinieservizi.it`
   - Vercel ti darà i DNS da configurare

4. **Su Aruba (Pannello DNS):**
   - Accedi al pannello di controllo dominio
   - Vai in "Gestione DNS"
   - Aggiungi questi record:
     ```
     Tipo A:     @ → 76.76.21.21
     Tipo CNAME: www → cname.vercel-dns.com
     ```
   - Salva e attendi 24-48h per la propagazione

### Metodo 2: Deploy da Terminale

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📁 Struttura del Progetto

```
giardinieservizi/
├── app/
│   ├── layout.js          # Layout principale con metadata SEO
│   ├── page.js            # Homepage
│   └── globals.css        # Stili globali
├── components/
│   ├── Header.js          # Navigazione
│   ├── HeroCarousel.js    # Carousel hero con animazioni
│   ├── Services.js        # Sezione servizi
│   ├── AboutUs.js         # Chi siamo
│   ├── Contact.js         # Form contatti
│   ├── Footer.js          # Footer completo
│   └── CookieBanner.js    # Banner cookie personalizzato
├── public/                # File statici (immagini, etc)
├── next.config.js         # Configurazione Next.js
├── tailwind.config.js     # Configurazione Tailwind
└── package.json           # Dipendenze
```

## ⚙️ Funzionalità Implementate

- ✅ **Design Responsive** - Ottimizzato per mobile, tablet e desktop
- ✅ **Hero Carousel** - Carousel automatico con 3 slide
- ✅ **Servizi Professionali** - Sezione con 6 servizi incluso "Equilibrio Vegetale"
- ✅ **Form Contatti** - Form funzionale con validazione
- ✅ **Cookie Banner** - Banner GDPR compliant personalizzato
- ✅ **SEO Ottimizzato** - Metadata e struttura SEO-friendly
- ✅ **Animazioni Moderne** - Transizioni smooth e hover effects
- ✅ **Navigazione Smooth** - Scroll automatico alle sezioni

## 🎨 Personalizzazione

### Colori
I colori principali sono definiti in `tailwind.config.js`:
- Primary: Verde (tema giardinaggio)
- Sfumature da 50 a 900

### Contenuti
Per modificare i contenuti:
- **Testi**: Modifica direttamente i componenti in `/components`
- **Immagini**: Sostituisci gli URL in `HeroCarousel.js` e altri componenti
- **Servizi**: Modifica l'array `services` in `Services.js`
- **Contatti**: Aggiorna email/telefono in `Contact.js` e `Footer.js`

### Partita IVA
Aggiorna la P.IVA nel `Footer.js`:
```javascript
<p className="text-gray-400">P.IVA: XXXXXXXXXXX</p>
```

## 🔧 Comandi Utili

```bash
npm run dev      # Sviluppo locale
npm run build    # Build produzione
npm run start    # Avvia server produzione
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🍪 Cookie Policy

Il banner cookie è completamente personalizzato e salva le preferenze in `localStorage`:
- Cookie necessari (sempre attivi)
- Cookie analitici (opzionali)
- Cookie marketing (opzionali)

## 📧 Configurazione Email

Il form contatti è pronto ma richiede l'integrazione con un servizio email.
Opzioni consigliate:
- **Formspree** (semplice)
- **SendGrid** (professionale)
- **EmailJS** (gratuito)

## 🐛 Troubleshooting

### Errore "npm install"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 occupata
```bash
npm run dev -- -p 3001
```

### Build fallita
Verifica che tutte le dipendenze siano installate:
```bash
npm install --legacy-peer-deps
```

## 📝 Note Importanti

1. **Prima del deploy:**
   - Sostituisci le immagini placeholder con immagini reali
   - Aggiorna telefono/email nei contatti
   - Inserisci la Partita IVA corretta
   - Configura un servizio email per il form

2. **Performance:**
   - Le immagini sono caricate da Unsplash (da sostituire)
   - Considera l'uso di Next.js Image per ottimizzazione

3. **SEO:**
   - Aggiungi Google Analytics se necessario
   - Configura Search Console dopo il deploy
   - Crea sitemap.xml se serve

## 🤝 Supporto

Per problemi o domande:
- Verifica la documentazione Next.js: https://nextjs.org/docs
- Documentazione Vercel: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

## 📄 Licenza

Progetto proprietario - Tutti i diritti riservati

---

**Creato con ❤️ per Giardini e Servizi**
