import {
  BadgeCheck,
  Bird,
  HeartPulse,
  Leaf,
  MessageCircle,
  Shield,
  Sparkles,
} from 'lucide-react'
import packagingImage from './assets/masterpigeon-packaging.png'
import logoImage from './assets/masterpigeon-logo.png'

function App() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? '905000000000'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  const featureCards = [
    {
      title: '%100 Doğal İçerik',
      description: 'Doğal formül ile günlük beslenmede temiz ve dengeli destek.',
      icon: Leaf,
    },
    {
      title: 'HACCP & ISO 9001',
      description: 'Sertifikalı üretim anlayışıyla güvenilir kalite standardı.',
      icon: BadgeCheck,
    },
    {
      title: 'Vitamin ve Mineral Desteği',
      description: 'Formüle eklenen destekleyici bileşenlerle güçlü kondisyon.',
      icon: Shield,
    },
  ]

  const productHighlights = [
    { text: '%100 Doğal', icon: Leaf },
    { text: 'HACCP & ISO 9001 Sertifikalı', icon: BadgeCheck },
    { text: 'Vitamin & Mineral Takviyeli', icon: Sparkles },
    { text: 'Bağışıklık Desteği', icon: Bird },
    { text: 'Kolay Sindirilebilir', icon: HeartPulse },
  ]

  return (
    <div className="relative min-h-screen bg-neutral-900 text-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),transparent_45%),radial-gradient(circle_at_80%_0,_rgba(234,179,8,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between border-b border-neutral-800 py-5">
          <img
            src={logoImage}
            alt="Masterpigeon logosu"
            className="h-16 w-auto sm:h-20"
          />
          <a
            href={whatsappLink}
            className="rounded-full border border-emerald-500 px-5 py-2 text-sm font-bold uppercase tracking-wider text-emerald-400 transition hover:bg-emerald-500 hover:text-neutral-900"
          >
            Sipariş Hattı
          </a>
        </nav>

        <header className="py-16 text-center sm:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Premium Güvercin Beslenme Bilimi
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold uppercase tracking-wider leading-tight text-white sm:text-5xl lg:text-6xl">
            Masterpigeon Premium Güvercin Maması 1 KG
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Gönderdiğiniz ambalaja uygun olarak hazırlanan 1 KG premium güvercin
            maması. Doğal içerik, sertifikalı üretim ve günlük destekleyici
            formül bir arada.
          </p>
          <a
            href={whatsappLink}
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-emerald-500 to-yellow-500 px-8 py-4 text-lg font-extrabold uppercase tracking-wider text-neutral-900 shadow-[0_10px_40px_rgba(16,185,129,0.25)] transition hover:brightness-110"
          >
            WhatsApp'tan Sipariş Ver
          </a>
        </header>

        <section className="py-8 sm:py-12">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-wider text-white">
            Neden Masterpigeon 1 KG?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = card.icon
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-neutral-800 bg-neutral-800/60 p-6 backdrop-blur"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-emerald-500/15 p-3 text-emerald-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-extrabold uppercase tracking-wider text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-gray-300">{card.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-wider text-white">
            Ürün Detayları
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-300">
            Şu anda tanıtımı yapılan ürün: Masterpigeon Premium Güvercin Maması
            1 KG.
          </p>

          <article className="mx-auto mt-8 max-w-4xl rounded-2xl border border-green-400/40 bg-neutral-800/60 p-6">
            <div className="mb-5 rounded-xl bg-gradient-to-r from-green-500 to-yellow-400 px-4 py-3 text-sm font-extrabold uppercase tracking-wider text-neutral-900">
              Premium Güvercin Maması (1 KG)
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {productHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.text} className="flex items-start gap-3 text-gray-200">
                    <Icon size={18} className="mt-0.5 shrink-0 text-green-300" />
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </article>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl rounded-3xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 sm:p-10">
            <p className="mb-8 text-center text-2xl font-extrabold uppercase tracking-wider text-white sm:text-3xl">
              Masterpigeon Güvercin Maması - 1 KG
            </p>

            <div className="relative mx-auto flex w-full max-w-xl items-center justify-center rounded-2xl border border-emerald-500/30 bg-neutral-950 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
              <img
                src={packagingImage}
                alt="Masterpigeon ürün ambalajı"
                className="w-full rounded-xl object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full border border-yellow-500/50 bg-neutral-900/90 px-3 py-1 text-xs font-semibold text-yellow-400 sm:text-sm">
                HACCP + ISO 9001
              </div>
              <div className="absolute bottom-4 right-4 rounded-full border border-emerald-500/50 bg-neutral-900/90 px-3 py-1 text-xs font-semibold text-emerald-300 sm:text-sm">
                %100 Doğal
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-10">
          <div className="mx-auto grid max-w-4xl gap-4 rounded-2xl border border-neutral-800 bg-neutral-800/40 p-5 text-sm text-gray-300 sm:grid-cols-2 sm:gap-6 sm:p-6">
            <div>
              <p className="font-bold uppercase tracking-wider text-white">Iletisim</p>
              <p className="mt-2">Siparis ve bilgi icin WhatsApp hatti uzerinden bize ulasabilirsiniz.</p>
              <a href={whatsappLink} className="mt-3 inline-block text-emerald-400 hover:text-emerald-300">
                +{whatsappNumber}
              </a>
            </div>
            <div>
              <p className="font-bold uppercase tracking-wider text-white">Gizlilik ve Bilgilendirme</p>
              <p className="mt-2">
                Bu sayfadaki urun bilgileri tanitim amaclidir. Siparis, iade ve teslimat kosullari
                satin alma adiminda acikca paylasilir.
              </p>
            </div>
          </div>
        </section>
      </div>

      <a
        href={whatsappLink}
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-yellow-500 text-neutral-900 shadow-lg shadow-emerald-500/30 transition hover:scale-105"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}

export default App
