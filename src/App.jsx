import { useEffect, useState } from 'react'
import {
  Award,
  BadgeCheck,
  Bird,
  ChevronDown,
  ChevronRight,
  Feather,
  HelpCircle,
  HeartPulse,
  Leaf,
  Menu,
  MessageCircle,
  Package,
  Phone,
  Shield,
  Star,
  Truck,
  X,
} from 'lucide-react'
import productImage from './assets/premium-pigeon-mix-20kg.png'
import blackMixImage from './assets/classic-black-mix-contents.png'
import blueMixImage from './assets/premium-blue-mix-contents.png'
import logoImage from './assets/masterpigeon-logo.png'
import { formatTrPhone, telLink } from './utils/phone.js'

const NAV_LINKS = [
  { href: '#', label: 'Ana Sayfa', id: 'hero' },
  { href: '#urun', label: 'Ürünler', id: 'urun' },
  {
    href: '#icerik',
    label: 'Karışımlar',
    id: 'icerik',
    children: [
      { href: '#icerik-siyah', label: 'Classic Siyah', id: 'icerik-siyah' },
      { href: '#icerik-lacivert', label: 'Premium Lacivert', id: 'icerik-lacivert' },
    ],
  },
  { href: '#kalite', label: 'Kalite', id: 'kalite' },
  { href: '#bayilik', label: 'Bayilik', id: 'bayilik' },
  { href: '#sss', label: 'SSS', id: 'sss' },
  { href: '#iletisim', label: 'İletişim', id: 'iletisim' },
]

const FOOTER_GROUPS = [
  {
    title: 'Keşfet',
    links: [
      { href: '#urun', label: 'Ürün Ailesi' },
      { href: '#icerik-siyah', label: 'Classic Siyah Karışım' },
      { href: '#icerik-lacivert', label: 'Premium Lacivert Karışım' },
      { href: '#kalite', label: 'Üretim Kalitesi' },
    ],
  },
  {
    title: 'Destek',
    links: [
      { href: '#bayilik', label: 'Toptan Bayilik' },
      { href: '#sss', label: 'Sık Sorulan Sorular' },
      { href: '#iletisim', label: 'İletişim' },
    ],
  },
]

function SectionLabel({ children }) {
  return (
    <p className="section-label text-xs font-semibold uppercase text-brand-gold">
      {children}
    </p>
  )
}

function FaqItem({ item, isOpen, onToggle }) {
  const Icon = item.icon
  return (
    <article
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? 'border-brand-gold/30 bg-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
        aria-expanded={isOpen}
      >
        <span className="inline-flex shrink-0 rounded-sm bg-brand-gold/10 p-2.5 text-brand-gold">
          <Icon size={18} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="mb-2 inline-block rounded-sm border border-brand-gold/20 bg-brand-gold/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
            {item.category}
          </span>
          <span className="block text-sm font-bold leading-snug text-white sm:text-base">
            {item.q}
          </span>
        </span>
        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="border-t border-white/10 px-5 pb-5 sm:px-6 sm:pb-6">
          <p className="ml-[52px] text-sm leading-relaxed text-gray-300">{item.a}</p>
          {item.tip && (
            <p className="ml-[52px] mt-3 rounded-sm border border-brand-gold/15 bg-brand-gold/5 px-3 py-2 text-xs leading-relaxed text-brand-gold/90">
              {item.tip}
            </p>
          )}
        </div>
      )}
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mixMenuOpen, setMixMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [openFaq, setOpenFaq] = useState(0)

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? '905534242228'
  const dealershipPhone =
    import.meta.env.VITE_DEALERSHIP_PHONE ?? '905534242228'

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Merhaba, Master Pigeon Premium Pigeon Mix hakkında bilgi almak istiyorum.')}`
  const dealershipWhatsApp = `https://wa.me/${dealershipPhone}?text=${encodeURIComponent('Merhaba, Master Pigeon toptan bayilik hakkında bilgi almak istiyorum.')}`
  const dealershipTel = telLink(dealershipPhone)
  const dealershipDisplay = formatTrPhone(dealershipPhone)
  const whatsappDisplay = formatTrPhone(whatsappNumber)

  const benefits = [
    {
      title: 'Doğal İçerik',
      description: 'Seçilmiş tahıl ve tohum karışımıyla doğal beslenme desteği.',
      icon: Leaf,
    },
    {
      title: 'Güçlü Bağışıklık',
      description: 'Vitamin ve mineral takviyeli formül ile kondisyon desteği.',
      icon: Shield,
    },
    {
      title: 'Parlak Tüy Yapısı',
      description: 'Dengeli içerik ile tüy kalitesini destekleyen premium karışım.',
      icon: Feather,
    },
    {
      title: 'Sağlıklı Gelişim',
      description: 'Günlük enerji ihtiyacını karşılayan dengeli beslenme profili.',
      icon: HeartPulse,
    },
  ]

  const stats = [
    { value: '20 KG', label: 'Endüstriyel Ambalaj' },
    { value: '10+', label: 'Karışım Bileşeni' },
    { value: '2', label: 'Premium Formül' },
    { value: 'ISO', label: '9001 Kalite' },
  ]

  const orderSteps = [
    {
      step: '01',
      title: 'Formül Seçin',
      text: 'Classic Siyah veya Premium Lacivert ambalajdan ihtiyacınıza uygun karışımı belirleyin.',
    },
    {
      step: '02',
      title: 'İletişime Geçin',
      text: 'WhatsApp veya telefon ile sipariş veya bayilik talebinizi iletin.',
    },
    {
      step: '03',
      title: 'Teslimat & Destek',
      text: 'Sipariş onayı sonrası teslimat planı ve süreç bilgisi paylaşılır.',
    },
  ]

  const faqs = [
    {
      category: 'Ürün Seçimi',
      icon: Package,
      q: 'Classic Siyah mı, Premium Lacivert mi tercih etmeliyim?',
      a: 'Classic Siyah; küçük taneli, bezelyesiz yapısıyla özellikle kısa gagalı güvercinler ve dengeli günlük beslenme arayan yetiştiriciler için idealdir. Premium Lacivert ise bezelye ve zenginleştirilmiş mısır içeren, daha geniş besin profilli formülüyle performans dönemlerine uygundur.',
      tip: 'Kısa gagalı güvercinler için Classic Siyah paketi önerilir — bezelyesiz, küçük taneli karışım.',
    },
    {
      category: 'Formül',
      icon: Leaf,
      q: 'Karışımda kaç farklı bileşen bulunuyor?',
      a: 'Her iki formülümüz de 10\'dan fazla seçilmiş tahıl, tohum ve destekleyici bileşenden oluşur. Sitede öne çıkanlar, formülün temel karakterini yansıtan ana bileşenlerdir; tam reçete ticari gizlilik kapsamında korunur.',
    },
    {
      category: 'Kısa Gagalı',
      icon: Bird,
      q: 'Siyah paket neden kısa gagalı güvercinler için öneriliyor?',
      a: 'Classic Siyah karışım; küçük taneli yapısı sayesinde kısa gagalı güvercinlerin rahatça tüketebileceği boyutta hazırlanır. Bezelye içermez; bu sayede gagalı küçük ırklarda sindirim ve tüketim kolaylığı sağlar.',
      tip: 'Bezelyesiz · Küçük taneli · Kısa gagalı güvercinlere özel',
    },
    {
      category: 'Bayilik',
      icon: Truck,
      q: 'Toptan bayilik ve bölgesel satış nasıl yapılır?',
      a: 'Petshop, yetiştirici ve bayi adayları +90 553 424 22 28 numaralı bayilik hattından veya WhatsApp üzerinden doğrudan ulaşabilir. Bölgesel bayilik, toptan fiyatlandırma ve düzenli sevkiyat koşulları görüşme sonrası paylaşılır.',
    },
    {
      category: 'Kalite',
      icon: Shield,
      q: 'Üretim ve kalite güvencesi nasıl sağlanıyor?',
      a: 'Master Pigeon üretimi HACCP ve ISO 9001 kalite anlayışıyla yürütülür. Hammadde girişinden ambalajlamaya kadar kontrollü süreçler uygulanır; her parti aynı premium standardı hedefler.',
    },
    {
      category: 'Sipariş',
      icon: MessageCircle,
      q: 'Sipariş vermek için ne yapmam gerekiyor?',
      a: 'Perakende siparişler için WhatsApp hattımızdan formül tercihinizi (Classic Siyah veya Premium Lacivert) ve miktarınızı iletmeniz yeterlidir. Toptan talepler için bayilik hattını arayabilirsiniz.',
    },
    {
      category: 'Beslenme',
      icon: Feather,
      q: 'Günlük kullanımda nelere dikkat etmeliyim?',
      a: 'Karışımı kuru ve serin ortamda saklayın, taze su sunumunu ihmal etmeyin. Güvercin sayısı, yaşı ve dönem (eğitim, yarış, dinlenme) beslenme miktarını etkiler; emin olmadığınız durumlarda iletişim hattımızdan yönlendirme alabilirsiniz.',
    },
    {
      category: 'Teslimat',
      icon: HelpCircle,
      q: 'Minimum sipariş ve teslimat süreci nasıl işliyor?',
      a: 'Perakende ve toptan sipariş koşulları talep türüne göre değişir. Sipariş onayı sonrası teslimat planı, fiyat ve ödeme bilgileri size doğrudan iletilir.',
    },
  ]

  const variants = [
    {
      name: 'Classic',
      color: 'Siyah Ambalaj',
      tag: 'Kısa Gagalı Güvercinler',
      description:
        'Küçük taneli, bezelyesiz formülüyle kısa gagalı güvercinler için özel olarak geliştirilmiş Classic Siyah karışım. Dengeli tahıl ve tohum profili sunar.',
      accent: 'border-neutral-700 bg-neutral-900/80',
      dot: 'bg-neutral-900 ring-neutral-600',
      contentAnchor: '#icerik-siyah',
      features: ['Bezelyesiz formül', 'Küçük taneli karışım', 'Kısa gagalı ırklara uygun'],
    },
    {
      name: 'Premium',
      color: 'Lacivert Ambalaj',
      tag: 'Performans Dönemi',
      description:
        'Bezelye ve zenginleştirilmiş mısır içeren Premium Lacivert seri. 10+ bileşenli formülüyle geniş besin profili ve kondisyon desteği sağlar.',
      accent: 'border-brand-navy-light bg-brand-navy/60',
      dot: 'bg-brand-navy ring-brand-navy-light',
      contentAnchor: '#icerik-lacivert',
      features: ['10+ premium bileşen', 'Bezelye destekli formül', 'Performans odaklı karışım'],
    },
  ]

  const credentials = [
    { label: 'HACCP Sertifikalı', icon: BadgeCheck },
    { label: 'ISO 9001 Kalite', icon: Award },
    { label: 'Premium Quality', icon: Star },
    { label: '20 KG Endüstriyel', icon: Shield },
  ]

  const mixVariants = [
    {
      id: 'icerik-siyah',
      title: 'Siyah Paket İçeriği',
      badge: 'Classic Siyah Paket',
      badgeDot: 'bg-neutral-900 ring-neutral-500',
      badgeBorder: 'border-neutral-600 bg-neutral-900',
      image: blackMixImage,
      imageAlt: 'Classic Siyah paket içeriği — seçilmiş tahıl ve tohum karışımı',
      caption: 'Bezelyesiz · Küçük Taneli · 10+ Bileşen',
      description:
        'Classic Siyah ambalajdaki Premium Pigeon Mix; kısa gagalı güvercinler için özel olarak hazırlanmış, küçük taneli ve bezelyesiz bir formüldür. 10\'dan fazla seçilmiş tahıl ve tohumdan oluşur.',
      callout:
        'Kısa gagalı güvercinler için özel: küçük taneli, bezelyesiz karışım — kolay tüketim, dengeli beslenme.',
      glowClass: 'ingredient-showcase-glow',
      panelGradient: 'from-neutral-900/80 via-brand-black to-brand-black',
      imageFirst: true,
      ingredientsNote: 'Formülümüz 10+ bileşenden oluşur. Öne çıkan ana bileşenler:',
      ingredients: [
        { name: 'Ayçiçeği Tohumu', detail: 'Enerji ve yağ dengesi için seçilmiş beyaz çekirdek.', color: 'bg-stone-200' },
        { name: 'Darı & Küçük Tahıllar', detail: 'Günlük beslenmede sindirilebilirlik ve hacim desteği.', color: 'bg-amber-200' },
        { name: 'Mısır Tanesi', detail: 'Doğal karbonhidrat kaynağı ile performans desteği.', color: 'bg-yellow-400' },
        { name: 'Kırmızı Tohum Karışımı', detail: 'Protein ve renk çeşitliliği sağlayan premium bileşen.', color: 'bg-red-800' },
        { name: 'Siyah Tahıl & Tohum', detail: 'Formülün mineral dengesini tamamlayan koyu taneler.', color: 'bg-neutral-800' },
      ],
      stats: [
        { value: '10+', label: 'Karışım Bileşeni' },
        { value: 'Bezelyesiz', label: 'Formül Yapısı' },
        { value: '20 KG', label: 'Endüstriyel Ambalaj' },
      ],
    },
    {
      id: 'icerik-lacivert',
      title: 'Lacivert Paket İçeriği',
      badge: 'Premium Lacivert Paket',
      badgeDot: 'bg-brand-navy ring-brand-navy-light',
      badgeBorder: 'border-brand-navy-light bg-brand-navy/80',
      image: blueMixImage,
      imageAlt: 'Premium Lacivert paket içeriği — zenginleştirilmiş tahıl, baklagil ve tohum karışımı',
      caption: 'Zenginleştirilmiş · 10+ Bileşen',
      description:
        'Premium Lacivert ambalajdaki karışım; yeşil bezelye, sarı ve mor mısır ile 10\'dan fazla seçilmiş tahıl ve tohumdan oluşan zenginleştirilmiş bir formüldür.',
      callout: null,
      glowClass: 'ingredient-showcase-glow-blue',
      panelGradient: 'from-brand-navy/40 via-brand-black to-brand-black',
      imageFirst: false,
      ingredientsNote: 'Formülümüz 10+ bileşenden oluşur. Öne çıkan ana bileşenler:',
      ingredients: [
        { name: 'Yeşil Bezelye', detail: 'Bitkisel protein ve lif dengesi sağlayan premium baklagil.', color: 'bg-green-600' },
        { name: 'Sarı & Mor Mısır', detail: 'Enerji desteği ve formül çeşitliliği için çift taneli mısır.', color: 'bg-yellow-400' },
        { name: 'Ayçiçeği Tohumu', detail: 'Yağ ve enerji dengesini destekleyen seçilmiş çekirdek.', color: 'bg-stone-200' },
        { name: 'Darı & Küçük Tahıllar', detail: 'Sindirilebilirlik ve günlük beslenme hacmi için temel tahıl.', color: 'bg-amber-200' },
        { name: 'Mor Tohum & Siyah Tahıl', detail: 'Mineral ve renk çeşitliliği katan premium bileşenler.', color: 'bg-purple-900' },
        { name: 'Siyah Tohum Karışımı', detail: 'Formülün besin yoğunluğunu tamamlayan koyu taneler.', color: 'bg-neutral-800' },
      ],
      stats: [
        { value: '10+', label: 'Karışım Bileşeni' },
        { value: '%100', label: 'Doğal İçerik' },
        { value: '20 KG', label: 'Endüstriyel Ambalaj' },
      ],
    },
  ]

  const closeMenu = () => {
    setMenuOpen(false)
    setMixMenuOpen(false)
  }

  useEffect(() => {
    const sectionIds = [
      'hero',
      'urun',
      'icerik',
      'icerik-siyah',
      'icerik-lacivert',
      'kalite',
      'bayilik',
      'sss',
      'iletisim',
    ]

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const navLinkClass = (id) =>
    `text-xs font-semibold uppercase tracking-wider transition ${
      activeSection === id || (id === 'icerik' && (activeSection === 'icerik-siyah' || activeSection === 'icerik-lacivert'))
        ? 'text-brand-gold'
        : 'text-gray-400 hover:text-brand-gold'
    }`

  return (
    <div className="relative min-h-screen bg-brand-black text-gray-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(26,43,86,0.55),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.08),transparent_35%)]" />

      <header className="glass-nav sticky top-0 z-40 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="shrink-0" aria-label="Master Pigeon ana sayfa">
            <img src={logoImage} alt="Master Pigeon logosu" className="h-12 w-auto sm:h-14" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="nav-dropdown group relative">
                  <a href={link.href} className={`inline-flex items-center gap-1 px-3 py-2 ${navLinkClass(link.id)}`}>
                    {link.label}
                    <ChevronDown size={14} className="transition group-hover:rotate-180" />
                  </a>
                  <div className="nav-dropdown-panel absolute left-0 top-full z-50 min-w-[220px] pt-2 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <div className="overflow-hidden rounded-sm border border-white/10 bg-brand-black/95 shadow-xl backdrop-blur">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className={`block border-b border-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider last:border-0 ${
                            activeSection === child.id
                              ? 'bg-brand-gold/10 text-brand-gold'
                              : 'text-gray-300 hover:bg-white/5 hover:text-brand-gold'
                          }`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={link.href} href={link.href} className={`px-3 py-2 ${navLinkClass(link.id)}`}>
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              className="hidden rounded-sm bg-brand-gold px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-black transition hover:bg-brand-gold-light sm:inline-flex"
            >
              Sipariş Ver
            </a>
            <button
              type="button"
              className="inline-flex rounded-sm border border-white/15 p-2 text-gray-300 lg:hidden"
              aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-brand-black/95 px-4 py-4 lg:hidden" aria-label="Mobil menü">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setMixMenuOpen((open) => !open)}
                      className="flex w-full items-center justify-between rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300"
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition ${mixMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mixMenuOpen && (
                      <div className="mb-2 ml-3 border-l border-brand-gold/20 pl-3">
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className="block rounded-sm px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-brand-gold"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:bg-white/5 hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                ),
              )}
              <a
                href={whatsappLink}
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-4 py-3 text-sm font-bold uppercase tracking-wider text-brand-black"
              >
                <MessageCircle size={18} />
                Sipariş Ver
              </a>
              <a
                href={dealershipTel}
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/40 px-4 py-3 text-sm font-bold uppercase tracking-wider text-brand-gold"
              >
                <Phone size={18} />
                Bayilik Hattı
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="relative mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <section id="hero" className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="animate-fade-up">
            <SectionLabel>Master Mix Serisi</SectionLabel>
            <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.1] tracking-wide text-white sm:text-5xl lg:text-6xl">
              Premium <span className="brand-gradient-text">Pigeon Mix</span>
            </h1>
            <p className="mt-3 text-lg font-semibold uppercase tracking-[0.18em] text-brand-gold sm:text-xl">
              20 KG Profesyonel Karışım
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Güvercin yetiştiriciliğinde performans odaklı beslenme için
              geliştirilmiş premium yem karışımı. Classic Siyah — kısa gagalı
              güvercinler için bezelyesiz, küçük taneli formül. Premium Lacivert
              — 10+ bileşenli zenginleştirilmiş karışım.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {credentials.map((item) => {
                const Icon = item.icon
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-gray-200"
                  >
                    <Icon size={14} className="text-brand-gold" />
                    {item.label}
                  </span>
                )
              })}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-brand-black shadow-[0_8px_32px_rgba(212,175,55,0.25)] transition hover:bg-brand-gold-light"
              >
                <MessageCircle size={20} />
                WhatsApp Sipariş
              </a>
              <a
                href="#bayilik"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/40 bg-brand-gold/5 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-brand-gold transition hover:bg-brand-gold/10"
              >
                <Truck size={20} />
                Toptan Bayilik
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up animate-delay-1">
            <div className="product-showcase-glow absolute inset-0 rounded-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-navy/40 via-brand-black to-brand-black p-6 shadow-[0_24px_64px_rgba(0,0,0,0.5)] sm:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  Master Pigeon
                </span>
                <span className="rounded-sm border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-bold text-brand-gold">
                  20 KG
                </span>
              </div>
              <img
                src={productImage}
                alt="Master Pigeon Premium Pigeon Mix 20 KG — Siyah ve Lacivert ambalaj seçenekleri"
                className="w-full rounded-lg object-contain"
                fetchPriority="high"
              />
              <div className="mt-4 flex items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-neutral-900 ring-2 ring-neutral-600" />
                  Classic Siyah
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-brand-navy ring-2 ring-brand-navy-light" />
                  Premium Lacivert
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider mb-16" />

        <section aria-label="Marka istatistikleri" className="mb-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((item, index) => {
            const delays = ['', 'animate-delay-1', 'animate-delay-2', 'animate-delay-3']
            return (
              <div
                key={item.label}
                className={`animate-fade-up rounded-xl border border-white/10 bg-white/[0.03] px-5 py-6 text-center ${delays[index] ?? ''}`}
              >
              <p className="text-2xl font-extrabold text-brand-gold sm:text-3xl">{item.value}</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
                {item.label}
              </p>
              </div>
            )
          })}
        </section>

        <section id="urun" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Ürün Ailesi</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              İki Ambalaj Seçeneği
            </h2>
            <p className="mt-4 text-gray-300">
              Classic Siyah ve Premium Lacivert; her biri kendine özgü tahıl,
              baklagil ve tohum karışımıyla hazırlanmış premium formüller sunar.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {variants.map((variant) => (
              <article
                key={variant.name}
                className={`group rounded-xl border p-6 transition hover:border-brand-gold/30 sm:p-8 ${variant.accent}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`h-4 w-4 rounded-full ring-2 ${variant.dot}`} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-extrabold uppercase tracking-wider text-white">
                        {variant.name}
                      </h3>
                      <span className="rounded-sm border border-brand-gold/25 bg-brand-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                        {variant.tag}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-brand-gold">{variant.color}</p>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-gray-300">{variant.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-gray-400">
                  {variant.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <BadgeCheck size={14} className="shrink-0 text-brand-gold/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={variant.contentAnchor}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-gold transition group-hover:gap-2 hover:text-brand-gold-light"
                >
                  İçerik Karışımını İncele
                  <ChevronRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="icerik" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Formül Detayı</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              İçerik Karışımları
            </h2>
            <p className="mt-4 text-gray-300">
              Her ambalaj seçeneği, güvercin beslenmesine özel hazırlanmış
              premium tahıl ve tohum karışımı sunar.
            </p>
          </div>

          <div className="sticky top-[68px] z-30 mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-brand-black/80 p-1.5 backdrop-blur">
            <a
              href="#icerik-siyah"
              className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition sm:text-xs ${
                activeSection === 'icerik-siyah'
                  ? 'bg-neutral-800 text-white ring-1 ring-neutral-600'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Classic Siyah
            </a>
            <a
              href="#icerik-lacivert"
              className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition sm:text-xs ${
                activeSection === 'icerik-lacivert'
                  ? 'bg-brand-navy text-white ring-1 ring-brand-navy-light'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Premium Lacivert
            </a>
          </div>

          <div className="mt-12 space-y-10">
            {mixVariants.map((mix) => (
              <article
                key={mix.id}
                id={mix.id}
                className={`scroll-mt-28 overflow-hidden rounded-2xl border border-brand-gold/15 bg-gradient-to-br ${mix.panelGradient}`}
              >
                <div className="grid items-stretch lg:grid-cols-2">
                  <div
                    className={`relative border-t border-brand-gold/10 p-6 sm:p-10 lg:border-t-0 ${
                      mix.imageFirst ? 'order-2 lg:order-1 lg:border-r' : 'order-2 lg:order-2 lg:border-l'
                    }`}
                  >
                    <div className={`${mix.glowClass} absolute inset-0`} />
                    <div className="relative">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className={`inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-200 ${mix.badgeBorder}`}>
                          <span className={`h-2.5 w-2.5 rounded-full ring-2 ${mix.badgeDot}`} />
                          {mix.badge}
                        </span>
                        <span className="rounded-sm border border-brand-gold/30 bg-brand-gold/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
                          İçerik Karışımı
                        </span>
                      </div>
                      <img
                        src={mix.image}
                        alt={mix.imageAlt}
                        loading="lazy"
                        className="w-full rounded-xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                      />
                      <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                        {mix.caption}
                      </p>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-center p-8 sm:p-12 ${mix.imageFirst ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                    <h3 className="text-2xl font-extrabold uppercase tracking-wider text-white sm:text-3xl">
                      {mix.title}
                    </h3>
                    <p className="mt-5 leading-relaxed text-gray-300">{mix.description}</p>
                    {mix.callout && (
                      <div className="mt-5 flex items-start gap-3 rounded-lg border border-brand-gold/20 bg-brand-gold/5 p-4">
                        <Bird size={18} className="mt-0.5 shrink-0 text-brand-gold" />
                        <p className="text-sm leading-relaxed text-brand-gold/90">{mix.callout}</p>
                      </div>
                    )}
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {mix.ingredientsNote}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {mix.ingredients.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-start gap-4 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition hover:border-brand-gold/20"
                        >
                          <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ring-2 ring-white/20 ${item.color}`} />
                          <div>
                            <p className="text-sm font-bold uppercase tracking-wide text-white">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-400">{item.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {mix.stats.map((stat) => (
                        <div key={stat.label} className="rounded-lg border border-brand-gold/15 bg-brand-gold/5 px-4 py-3 text-center">
                          <p className="text-xl font-extrabold text-brand-gold">{stat.value}</p>
                          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Ürün Avantajları</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              Ambalajdan Gelen Güvence
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-brand-gold/30 hover:bg-white/[0.05]"
                >
                  <div className="mb-4 inline-flex rounded-sm bg-brand-gold/10 p-3 text-brand-gold transition group-hover:bg-brand-gold/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="kalite" className="scroll-mt-24 py-16 sm:py-20">
          <div className="overflow-hidden rounded-2xl border border-brand-gold/15 bg-gradient-to-br from-brand-navy/50 via-brand-black to-brand-black">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <SectionLabel>Kurumsal Kalite</SectionLabel>
                <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
                  Profesyonel Üretim Standardı
                </h2>
                <p className="mt-5 leading-relaxed text-gray-300">
                  Master Pigeon, güvenilir ve sürdürülebilir kalite anlayışıyla
                  üretim yapar. Kontrollü hammadde seçimi ve sertifikalı süreçlerle
                  her partide aynı premium standardı hedefler.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Seçilmiş tahıl ve tohum karışımı',
                    'Vitamin ve mineral destekli formül',
                    'Kolay sindirilebilir içerik profili',
                    'Profesyonel yetiştiriciler için 20 KG ambalaj',
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3 text-gray-200">
                      <BadgeCheck size={18} className="mt-0.5 shrink-0 text-brand-gold" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative border-t border-brand-gold/10 bg-brand-black/40 p-8 sm:p-12 lg:border-t-0 lg:border-l">
                <div className="product-showcase-glow absolute inset-0" />
                <img
                  src={productImage}
                  alt="Master Pigeon Premium Pigeon Mix ürün görseli"
                  loading="lazy"
                  className="relative w-full rounded-lg object-contain"
                />
                <p className="relative mt-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  www.masterpigeon.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="bayilik" className="scroll-mt-24 py-16 sm:py-20">
          <div className="overflow-hidden rounded-2xl border border-brand-gold/25 bg-gradient-to-br from-brand-navy/60 via-brand-black to-brand-black">
            <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <div>
                <SectionLabel>Toptan Satış</SectionLabel>
                <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
                  Bayilik &amp; Toptan Sipariş
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-gray-300">
                  Petshop, yetiştirici ve bayi ağımız için özel fiyatlandırma,
                  düzenli tedarik ve profesyonel destek sunuyoruz. Toptan bayilik
                  talepleriniz için doğrudan satış hattımızdan ulaşabilirsiniz.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-brand-gold" />
                    Bölgesel bayilik fırsatları
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-brand-gold" />
                    Toptan sipariş ve düzenli sevkiyat
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-brand-gold" />
                    Ürün tanıtım ve satış desteği
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-brand-gold/20 bg-brand-black/50 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  Bayilik İletişim Hattı
                </p>
                <a
                  href={dealershipTel}
                  className="mt-4 block text-2xl font-extrabold tracking-wide text-white transition hover:text-brand-gold sm:text-3xl"
                >
                  {dealershipDisplay}
                </a>
                <p className="mt-2 text-sm text-gray-400">Hafta içi 09:00 – 18:00</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={dealershipTel}
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-black transition hover:bg-brand-gold-light"
                  >
                    <Phone size={18} />
                    Hemen Ara
                  </a>
                  <a
                    href={dealershipWhatsApp}
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/40 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-gold transition hover:bg-brand-gold/10"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Bayilik
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Sipariş Süreci</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              Nasıl Sipariş Verilir?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {orderSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <span className="text-3xl font-extrabold text-brand-gold/40">{item.step}</span>
                <h3 className="mt-3 text-lg font-extrabold uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sss" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Sık Sorulan Sorular</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
              Merak Edilenler
            </h2>
            <p className="mt-4 text-gray-300">
              Ürün seçiminden bayiliğe, beslenmeden teslimata — en çok sorulan
              konulara net yanıtlar.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-gray-500">
            Aradığınız yanıt burada yoksa{' '}
            <a href={whatsappLink} className="text-brand-gold underline-offset-2 hover:underline">
              WhatsApp
            </a>{' '}
            veya{' '}
            <a href={dealershipTel} className="text-brand-gold underline-offset-2 hover:underline">
              bayilik hattından
            </a>{' '}
            bize ulaşın.
          </p>
        </section>

        <section id="iletisim" className="scroll-mt-24 py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <SectionLabel>Perakende Sipariş</SectionLabel>
              <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-wider text-white">
                WhatsApp Sipariş Hattı
              </h2>
              <p className="mt-4 text-gray-300">
                Premium Pigeon Mix 20 KG perakende siparişi için WhatsApp
                hattımızdan hızlıca ulaşabilirsiniz.
              </p>
              <a
                href={whatsappLink}
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-gold px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-black transition hover:bg-brand-gold-light"
              >
                <MessageCircle size={18} />
                {whatsappDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-8 sm:p-10">
              <SectionLabel>Toptan &amp; Bayilik</SectionLabel>
              <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-wider text-white">
                Bayilik İletişim
              </h2>
              <p className="mt-4 text-gray-300">
                Toptan satış ve bayilik başvuruları için doğrudan arayın veya
                WhatsApp üzerinden yazın.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={dealershipTel}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-black transition hover:bg-brand-gold-light"
                >
                  <Phone size={18} />
                  {dealershipDisplay}
                </a>
                <a
                  href={dealershipWhatsApp}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/40 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-gold transition hover:bg-brand-gold/10"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-500">
            Bu sayfadaki ürün bilgileri tanıtım amaçlıdır. Sipariş, iade ve teslimat
            koşulları satın alma adımında paylaşılır.
          </p>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-brand-black/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <img src={logoImage} alt="Master Pigeon" className="h-12 w-auto" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
                Premium güvercin beslenme çözümleri. Classic Siyah — kısa gagalı
                güvercinler için bezelyesiz formül. Premium Lacivert — 10+
                bileşenli performans karışımı.
              </p>
            </div>
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-bold uppercase tracking-wider text-white">{group.title}</p>
                <nav className="mt-4 flex flex-col gap-2" aria-label={`${group.title} menüsü`}>
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-gray-400 transition hover:text-brand-gold"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">İletişim</p>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <a href={dealershipTel} className="block transition hover:text-brand-gold">
                  Bayilik: {dealershipDisplay}
                </a>
                <a href={whatsappLink} className="block transition hover:text-brand-gold">
                  Sipariş: {whatsappDisplay}
                </a>
                <a
                  href="https://www.masterpigeon.com"
                  className="block text-brand-gold/80 transition hover:text-brand-gold"
                >
                  www.masterpigeon.com
                </a>
              </div>
            </div>
          </div>
          <div className="section-divider mt-10 mb-6" />
          <p className="text-center text-xs uppercase tracking-wider text-gray-500">
            © {new Date().getFullYear()} Master Pigeon — Premium Pigeon Mix. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={dealershipTel}
          aria-label="Bayilik hattını ara"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-black/90 text-brand-gold shadow-lg backdrop-blur transition hover:scale-105 hover:bg-brand-gold hover:text-brand-black"
        >
          <Phone size={22} />
        </a>
        <a
          href={whatsappLink}
          aria-label="WhatsApp ile iletişime geç"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-brand-black shadow-[0_8px_24px_rgba(212,175,55,0.35)] transition hover:scale-105 hover:bg-brand-gold-light"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  )
}

export default App
