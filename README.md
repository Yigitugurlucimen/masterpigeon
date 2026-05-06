# Masterpigeon Landing Page

Masterpigeon Premium Guvercin Mamasi 1 KG urunu icin hazirlanmis React + Vite tabanli tanitim ve siparis yonlendirme sayfasi.

## Kurulum

```bash
npm install
```

## Gelistirme

```bash
npm run dev
```

Varsayilan adres: `http://localhost:5173`

## Ortam Degiskenleri

Proje, WhatsApp baglantisini ortam degiskeninden alir:

- `VITE_WHATSAPP_NUMBER`: Ulke kodu dahil numara (bosluksuz), ornek `905551112233`

`.env` ornegi:

```bash
VITE_WHATSAPP_NUMBER=905551112233
```

## Build ve Kontroller

```bash
npm run lint
npm run build
npm run preview
```

## Icerik Guncelleme

- Sayfa metinleri ve bolumler: `src/App.jsx`
- Genel stil ayarlari: `src/index.css`
- SEO ve sosyal medya etiketleri: `index.html`
- Logo / OG gorseli: `src/assets/masterpigeon-logo.png` ve `public/og-image.png`

## Yayin Oncesi Kontrol Listesi

- `VITE_WHATSAPP_NUMBER` dogru mu?
- SEO baslik/aciklama icerigi guncel mi?
- WhatsApp linkleri dogru numaraya gidiyor mu?
- `npm run lint` ve `npm run build` basarili mi?
