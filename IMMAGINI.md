# 📸 GUIDA ALLE IMMAGINI - Giardini e Servizi

## 🎨 Immagini da Sostituire

Il sito attualmente usa immagini placeholder da Unsplash. Per un risultato professionale, sostituiscile con foto reali!

### 1. Hero Carousel (3 slide)

**File:** `components/HeroCarousel.js` (righe 7-23)

**Slide 1** - "Il Tuo Giardino in Mani Esperte"
- Suggerimento: Foto di un bel giardino curato, vista ampia
- Dimensioni ideali: 1920x1080px o superiori
- Formato: JPG ottimizzato

**Slide 2** - "Equilibrio Vegetale"  
- Suggerimento: Close-up di piante sane, foglie verdi rigogliose
- Focus su dettagli botanici
- Dimensioni ideali: 1920x1080px o superiori

**Slide 3** - "Cura Professionale"
- Suggerimento: Foto del team al lavoro o attrezzi professionali
- Trasmettere professionalità
- Dimensioni ideali: 1920x1080px o superiori

### 2. Sezione Chi Siamo

**File:** `components/AboutUs.js` (riga 63)

- Suggerimento: Foto del team o di un giardino curato
- Orientamento verticale preferito
- Dimensioni ideali: 800x1000px

### 3. Contatti

**File:** `components/Contact.js` (riga 118)

- Suggerimento: Giardino curato o dettaglio di piante
- Orientamento orizzontale
- Dimensioni ideali: 800x400px

---

## 📁 Come Sostituire le Immagini

### Opzione 1: Usa URL Esterni (Attuale)
Sostituisci gli URL nelle righe indicate mantenendo la stessa struttura:
```javascript
src="https://tuo-dominio.com/immagine.jpg"
```

### Opzione 2: Carica Localmente (CONSIGLIATO)

1. **Metti le immagini nella cartella `/public`:**
   ```
   public/
   ├── hero-1.jpg
   ├── hero-2.jpg
   ├── hero-3.jpg
   ├── team.jpg
   └── contact.jpg
   ```

2. **Aggiorna i componenti:**
   ```javascript
   // Invece di URL Unsplash
   src="https://images.unsplash.com/photo..."
   
   // Usa path locale
   src="/hero-1.jpg"
   ```

---

## 🎯 Specifiche Tecniche Immagini

### Requisiti Generali
- **Formato:** JPG per foto, PNG per loghi
- **Peso:** Max 500KB per foto (usa compressione)
- **Risoluzione:** Almeno 1920px larghezza per hero
- **Qualità:** 80-85% (balance perfetto)

### Strumenti Consigliati per Ottimizzazione
- **TinyPNG** - https://tinypng.com (compressione online)
- **Squoosh** - https://squoosh.app (tool Google)
- **ImageOptim** - Per Mac
- **RIOT** - Per Windows

### Hero Carousel
- Larghezza: 1920-2560px
- Altezza: 1080-1440px
- Aspect Ratio: 16:9
- Peso: Max 500KB per slide

### Altre Sezioni
- Larghezza: 800-1200px
- Peso: Max 300KB
- Formato: JPG ottimizzato

---

## 🔍 Dove Trovare Foto Gratuite

Se non hai foto proprie, usa queste risorse LEGALI e GRATUITE:

### Siti Consigliati
1. **Unsplash** - https://unsplash.com
   - Query: "garden", "gardening", "plants", "landscaping"
   
2. **Pexels** - https://pexels.com
   - Ottima sezione giardinaggio
   
3. **Pixabay** - https://pixabay.com
   - Totalmente gratuito

### ⚠️ IMPORTANTE - Licenze
- Verifica sempre la licenza prima di usare foto
- Preferisci foto con licenza CC0 (dominio pubblico)
- Attribuisci il credito se richiesto

---

## 🎨 Consigli di Styling

### Palette Colori nelle Foto
- **Verde dominante** ✅ (tema giardinaggio)
- Contrasto naturale con cieli blu
- Evita filtri troppo saturi
- Mantieni toni naturali e realistici

### Composizione
- **Hero:** Vista ampia, punto focale centrale
- **Chi Siamo:** Verticale, persone in azione
- **Contatti:** Orizzontale, accogliente

### Mood
- Professionale ma accogliente
- Luminoso e vivace
- Trasmettere cura e attenzione

---

## 📝 Checklist Immagini

Prima del deploy, verifica:

- [ ] Tutte le immagini sono sostituite (niente placeholder)
- [ ] Peso ottimizzato (<500KB per hero, <300KB altri)
- [ ] Formato corretto (JPG per foto)
- [ ] Risoluzione adeguata (almeno 1920px hero)
- [ ] Licenze verificate se usi stock photos
- [ ] Alt text descrittivi aggiunti (SEO)
- [ ] Immagini coerenti con brand/stile

---

## 🚀 Performance

### Test Velocità
Dopo aver caricato le immagini, testa:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

### Target
- LCP (Largest Contentful Paint): <2.5s
- Peso totale pagina: <3MB
- Tutte le immagini WebP se possibile

---

## 💡 Tips Pro

1. **Usa Next.js Image Component:**
   ```javascript
   import Image from 'next/image'
   
   <Image
     src="/hero-1.jpg"
     width={1920}
     height={1080}
     alt="Giardino curato"
     priority
   />
   ```

2. **Lazy Loading:** Le immagini fuori viewport si caricano dopo

3. **Responsive Images:** Next.js genera automaticamente versioni ottimizzate

4. **WebP Automatico:** Next.js converte in WebP quando possibile

---

## 📞 Supporto

Hai bisogno di un fotografo professionista?
Considera di investire in foto originali del tuo team/lavori per massimo impatto!

**Budget consigliato:** 300-500€ per shooting professionale
**Risultato:** Sito unico, autentico, professionale ✨
